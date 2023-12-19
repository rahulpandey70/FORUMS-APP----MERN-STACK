import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
	const initialState = { email: "", password: "" };
	const [userData, setUserData] = useState(initialState);
	const { email, password } = userData;

	const { auth } = useSelector((state) => state);
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		if (auth.token) history.push("/");
	}, [auth.token, history]);

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(userData));
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="form" style={{ width: "100%" }}>
				<label className="form__label form__field" htmlFor="exampleInputEmail1">
					Email:
				</label>
				<input
					type="email"
					className="input"
					id="exampleInputEmail1"
					name="email"
					onChange={handleChangeInput}
					value={email}
					required
				/>

				<label
					htmlFor="exampleInputPassword1"
					className="form__label form__field"
				>
					Password:
				</label>

				<input
					type="password"
					className="input"
					id="exampleInputPassword1"
					onChange={handleChangeInput}
					value={password}
					name="password"
					required
				/>

				<button type="submit" className="btn btn--lg form__field">
					Login
				</button>

				<span style={{ marginLeft: "1rem" }}>
					New Here?{" "}
					<Link to="/register" className="login__logout">
						Register Now
					</Link>
				</span>
			</form>
		</>
	);
};

export default Login;
