import React, { useEffect, useState } from "react";
import "./Login.scss";
import { useDispatch, useSelector } from "react-redux";
import Loader from '../Loader/Loader'
import { loadTeacher, loginTeacher } from "../../action/Teacher";
import Logo from '../../assests/Logo.png'


const Login = () => {

  //switch login signup
  const [container, setContainer] = useState("");

  //login 
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //signup
  const [signupName, setSignupName] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupSubject, setSignupSubject] = useState("")
  const [signupPassword, setSignupPassword] = useState("")
  const dispatch = useDispatch()

  //login handler
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginTeacher(loginEmail, loginPassword));
  };

  //signup handler
  const signupHandler = (e) => {
    e.preventDefault();
    // dispatch(loginTeacher(loginEmail, loginPassword));
  };


  useEffect(() =>{
    dispatch(loadTeacher())
  }, [])
  const { loading } = useSelector(
    (state) => state.teacherLoad
  );
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={`login_container ${container}`}>
          <div className="forms-container">
            <div className="signin-signup">
              <form action="" className="sign-in-form" onSubmit={loginHandler}>
                <h2 className="title">Login</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                </div>
                <input type="submit" value="Login" className="btn solid" />
              </form>

              <form action="" className="sign-up-form" onSubmit={signupHandler}>
                <h2 className="title">Create Account</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Name" value={signupName} onChange={(e) => setSignupName(e.target.value)}/>
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)}/>
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="text" placeholder="Subject" value={signupSubject} onChange={(e) => setSignupSubject(e.target.value)}/>
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Sign Up" className="btn solid" />
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="login_content">
                <h3>New here?</h3>
                <p>
                  You Don't Have Any Account, Please Create An Account and Enjoy
                  With Us.
                </p>
                <button
                  className="btn transparent"
                  id="sign-up-btn"
                  onClick={() => setContainer("sign-up-mode")}
                >
                  Sign Up
                </button>
              </div>
              <img src={Logo} className="image logo-img" alt="" />
            </div>

            <div className="panel right-panel">
              <div className="login_content">
                <h3>One of us?</h3>
                <p>
                  You Have Already A Account, Then Please Login With Your Id and
                  Password.
                </p>
                <button
                  className="btn transparent"
                  id="sign-in-btn"
                  onClick={() => setContainer("")}
                >
                  Sign In
                </button>
              </div>
              <img src={Logo} className="image" alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
