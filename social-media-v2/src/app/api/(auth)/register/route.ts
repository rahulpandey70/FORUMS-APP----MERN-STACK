import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { registerValidation } from "@/lib/utils";
import { z } from "zod";
import { Prisma } from "@prisma/client";

export async function POST(req: NextRequest) {
	const body = await req.json();

	try {
		// validate inputs
		const userData = registerValidation.parse(body);

		const { name, username, email } = userData;
		if (!name) {
			return NextResponse.json({ error: "Name is required!" }, { status: 400 });
		}
		if (!username) {
			return NextResponse.json(
				{ error: "Username is required!" },
				{ status: 400 }
			);
		}

		const existingUser = await prisma.user.findFirst({
			where: {
				OR: [{ username }, { email }],
			},
		});

		if (existingUser) {
			return NextResponse.json(
				{ error: "Username or email already taken!" },
				{ status: 409 }
			);
		}

		// hashing password
		const hashedPassword = await bcrypt.hash(userData.password, 10);

		// create user
		const newUser = await prisma.user.create({
			data: {
				name: userData.name,
				username: userData.username,
				email: userData.email,
				password: hashedPassword,
			},
		});

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { password: _, ...userResponse } = newUser;
		return NextResponse.json(userResponse, { status: 201 });
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ error: error.errors.map((err) => err.message) },
				{ status: 400 }
			);
		} else if (error instanceof Prisma.PrismaClientKnownRequestError) {
			if (error.code === "P2002") {
				return NextResponse.json(
					{ error: "Username or email already taken." },
					{ status: 409 }
				);
			}
		}
		return NextResponse.json(
			{ error: "Something went wrong." },
			{ status: 500 }
		);
	}
}
