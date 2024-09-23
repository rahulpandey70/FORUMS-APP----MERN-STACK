import { UserAuthForm } from "@/components/UserAuthForm";

export const metadata = {
	title: "Login",
	description: "Login to your account",
};

const Login = () => {
	return <UserAuthForm type="login" />;
};

export default Login;
