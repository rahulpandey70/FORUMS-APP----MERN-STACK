import React from "react";
import { Link, useParams } from "react-router-dom";

import Login from "../components/Login";
import Register from "../components/Register";

const Dashboard = () => {
	const { parameter } = useParams();

	return (
		<div className="loginSignup">
			<div className="loginSignup__header">
				<div className="container">
					<div className="loginSignup__headerLeft">
						<Link className="loginSignup__headerLogo" to="/login">
							<h1>QuestionTime</h1>
						</Link>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="loginSignup__body">
					<div className="loginSignup__bodyLeft">
						{parameter === "login" ? <Login /> : <Register />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
