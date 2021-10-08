import React from 'react'
import { Link } from 'react-router-dom'

import Discussion from '../images/discussion.jpg'

import Login from '../components/login'

const LoginPage = () => {
        
return (
    <div className="loginSignup">
      <div className="loginSignup__header">
        <div className="container">
          <div className="loginSignup__headerLeft">
            <Link className="loginSignup__headerLogo" to="/">
            <h1>QuestionTime</h1>
            </Link>
            <h2 className="loginSignup__headerTitle">A place for developers to</h2>
            <h5 className="loginSignup__headerSubtitle">
              Ask Questions, Have Discussions & Improve Programming Skills
            </h5>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="loginSignup__body">
          <div className="loginSignup__bodyLeft">
            <Login/> 
          </div>
          <div className="loginSignup__bodyRight">
            <img
              className="loginSignup__heroImage"
              src={Discussion}
              alt="Mumble loginSignup Hero"
            />
          </div>
        </div>
      </div>
    </div>
    )
}

export default LoginPage
