import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { register } from "../redux/actions/authAction";

const Register = () => {
	const { auth, alert } = useSelector((state) => state);
	const dispatch = useDispatch();
	const history = useHistory();

	const initialState = {
		fullname: "",
		username: "",
		email: "",
		password: "",
		cf_password: "",
	};
	const [userData, setUserData] = useState(initialState);
	const { fullname, username, email, password, cf_password } = userData;

	useEffect(() => {
		if (auth.token) history.push("/");
	}, [auth.token, history]);

	const handleChangeInput = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(register(userData));
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="form" style={{ width: "100%" }}>
				<label htmlFor="fullname" className="form__label form__field">
					FullName:
				</label>
				<input
					type="text"
					className="input"
					name="fullname"
					id="fullname"
					onChange={handleChangeInput}
					value={fullname}
					style={{ background: `${alert.fullname ? "#fd2d6a14" : ""}` }}
				/>

				<small className="form__error">
					{alert.fullname ? alert.fullname : ""}
				</small>

				<label htmlFor="username" className="form__label form__field">
					Username:
				</label>
				<input
					type="text"
					className="input"
					name="username"
					id="username"
					onChange={handleChangeInput}
					value={username.toLowerCase().replace(/ /g, "")}
					style={{ background: `${alert.username ? "#fd2d6a14" : ""}` }}
				/>

				<small className="form__error">
					{alert.username ? alert.username : ""}
				</small>

				<label htmlFor="email" className="form__label form__field">
					Email:
				</label>
				<input
					type="email"
					className="input"
					id="email"
					name="email"
					onChange={handleChangeInput}
					value={email}
					style={{ background: `${alert.email ? "#fd2d6a14" : ""}` }}
				/>

				<small className="form__error">{alert.email ? alert.email : ""}</small>

				<label htmlFor="password" className="form__label form__field">
					Password:
				</label>
				<input
					type="password"
					id="password"
					className="input"
					onChange={handleChangeInput}
					value={password}
					name="password"
					style={{ background: `${alert.password ? "#fd2d6a14" : ""}` }}
				/>

				<small className="form__error">
					{alert.password ? alert.password : ""}
				</small>

				<label htmlFor="cfpass" className="form__label form__field">
					Confirm Password:
				</label>
				<input
					type="password"
					id="cfpass"
					className="input"
					onChange={handleChangeInput}
					value={cf_password}
					name="cf_password"
					style={{ background: `${alert.cf_password ? "#fd2d6a14" : ""}` }}
				/>

				<small className="form__error">
					{alert.cf_password ? alert.cf_password : ""}
				</small>

				<button type="submit" className="btn btn--lg form__field">
					Register
				</button>

				<span style={{ marginLeft: "1rem" }}>
					Have an account?{" "}
					<Link className="login__logout" to="/login">
						Login
					</Link>
				</span>
			</form>
		</>
	);
};

export default Register;
