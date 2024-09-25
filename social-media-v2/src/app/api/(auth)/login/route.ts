import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { loginValidation } from "@/lib/utils";
import { z } from "zod";
import jwt from "jsonwebtoken";

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET as string;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

export async function POST(req: NextRequest) {
	const body = await req.json();

	try {
		// validate inputs
		const userData = loginValidation.parse(body);

		// find user by email
		const existedUser = await prisma.user.findUnique({
			where: {
				email: userData.email,
			},
		});

		if (!existedUser) {
			return NextResponse.json(
				{ error: "Email doesn't exists" },
				{ status: 404 }
			);
		}

		// compare password
		const isPasswordValid = await bcrypt.compare(
			userData.password,
			existedUser.password
		);
		if (!isPasswordValid) {
			return NextResponse.json({ error: "Invalid Password" }, { status: 401 });
		}

		// create jwt token and refresh token(store in session model)
		// create access token
		const accessToken = jwt.sign(
			{ userId: existedUser.id },
			JWT_ACCESS_SECRET,
			{
				expiresIn: "1h",
			}
		);

		// create refresh token
		const refreshToken = jwt.sign(
			{ userId: existedUser.id },
			JWT_REFRESH_SECRET,
			{
				expiresIn: "7d",
			}
		);

		const existingSession = await prisma.session.findFirst({
			where: {
				userId: existedUser.id,
			},
		});

		if (existingSession) {
			// If session exists, update it with the new refresh token and expiration
			await prisma.session.update({
				where: { id: existingSession.id },
				data: {
					refreshToken: refreshToken,
					expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
				},
			});
		} else {
			// If no session exists, create a new one
			await prisma.session.create({
				data: {
					userId: existedUser.id,
					refreshToken: refreshToken,
					expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
				},
			});
		}

		// set cookies
		const response = NextResponse.json(
			{ user: { ...existedUser, password: undefined } },
			{ status: 200 }
		);
		response.cookies.set("accessToken", accessToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: 60 * 60,
		});
		response.cookies.set("refreshToken", refreshToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: 7 * 24 * 60 * 60,
		});

		return response;
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ error: error.errors.map((err) => err.message) },
				{ status: 400 }
			);
		}
		return NextResponse.json(
			{ error: "Something went wrong." },
			{ status: 500 }
		);
	}
}
