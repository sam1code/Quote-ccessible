import React, { useState } from "react";
import "./style.css";
import { Link, Redirect } from "react-router-dom";
import registerImage from "./img/register.svg";
import loginImage from "./img/log.svg";
import axios from "axios";
import { useStoreActions, useStoreState } from "easy-peasy";

const Account = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const action = useStoreActions((action) => action.handleIsLoggedIn);
  const isLogged = useStoreState(state => state.isLoggedIn);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const handleSignUpMode = () => {
    isSignUpMode ? setIsSignUpMode(false) : setIsSignUpMode(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      username: username,
      password: password,
    };
    axios
      .post(BACKEND_URL + "/login", data)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        action(true);
        return <Redirect to="/" />
      })
      .catch((err) => {
        alert("Something went wrong while logging the user, please try again");
        console.log("Error", err);
      });
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      username: username,
      password: password,
    };
    axios.post(BACKEND_URL + "/register", data).then((res) => {
        if(res.status === 200)
        {
            handleLogin(e);
        }
        else{
            alert("Failed to Register, Please Try Again")
        }
    }).catch(err => {
        alert("Something went wrong while registering the user, please try again");
        console.log("Error", err);
    });
  };
  const isLoggedIn = useStoreState((state)=> state.isLoggedIn);
  if(isLoggedIn){
    return <Redirect to="/" />
  }

  return (
    <div className={"container login-container" + (isSignUpMode ? " sign-up-mod" : "")}>
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={handleLogin}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn solid" type="submit">
              Login
            </button>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <Link to="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </form>
          <form className="sign-up-form" onSubmit={handleRegister}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="btn" type="submit">
              Register
            </button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <Link to="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Sign up to go online and write your{" "}
              <i className="bx bxs-quote-single-left"></i>
              <b>QUOTE</b>
              <i className="bx bxs-quote-single-right"></i> and publish to the
              world of Quote-ccessible.
            </p>
            <button
              className={"btn transparent"}
              id="sign-up-btn"
              onClick={handleSignUpMode}
            >
              Sign up
            </button>
          </div>
          <img src={loginImage} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              So lets Sign in and write your own{" "}
              <i className="bx bxs-quote-single-left"></i>
              <b>QUOTE</b>
              <i className="bx bxs-quote-single-right"></i> and publish to the
              world of Quote-ccessible.
            </p>
            <button
              className={"btn transparent"}
              id="sign-in-btn"
              onClick={handleSignUpMode}
            >
              Sign in
            </button>
          </div>
          <img src={registerImage} className="image" alt="" />
          <footer>
            {" "}
            <b> Quote-ccessible</b>
            <br />
            <p>&#169; all rights reserved</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Account;
