import { UserAuthForm } from "@/components/UserAuthForm";

export const metadata = {
	title: "Create an account",
	description: "Create an account to get started.",
};

const Register = () => {
	return <UserAuthForm type="register" />;
};

export default Register;
