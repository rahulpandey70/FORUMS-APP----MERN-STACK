import React from "react";
import { Link } from "react-router-dom";

import Discussion from "../images/discussion.jpg";

import Register from "../components/register";

const RegisterPage = () => {
  return (
    <div className="loginSignup">
      <div className="loginSignup__header">
        <div className="container">
          <div className="loginSignup__headerLeft">
            <Link className="loginSignup__headerLogo" to="/">
              <h1>QuestionTime</h1>
            </Link>
            <h2 className="loginSignup__headerTitle">
              A place for developers to
            </h2>
            <h5 className="loginSignup__headerSubtitle">
              Ask Questions, Have Discussions & Improve Programming Skills
            </h5>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="loginSignup__body">
          <div className="loginSignup__bodyLeft">
            <Register />
          </div>
          <div className="loginSignup__bodyRight">
            <img
              className="loginSignup__heroImage"
              src={Discussion}
              alt="loginSignup Hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
