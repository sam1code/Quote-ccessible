import React, {useState} from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import registerImage from './img/register.svg';
import loginImage from './img/log.svg';

const Account = () => {
    const [isSignUpMode, setIsSignUpMode] = useState(false)

    const handleSignUpMode = () => {
        isSignUpMode ? setIsSignUpMode(false) : setIsSignUpMode(true)
        console.log("Clicked with val", isSignUpMode)
    }


    return (
        <div className={"container" + (isSignUpMode ? " sign-up-mod" : '')}>
            <div className="forms-container">
                <div className="signin-signup">
                <form action="#" className="sign-in-form">
                    <h2 className="title">Sign in</h2>
                    <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Login" className="btn solid" />
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
                <form action="#" className="sign-up-form">
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" className="btn" value="Sign up" />
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
                Sign up to go online and write your <i className='bx bxs-quote-single-left' ></i><b>QUOTE</b><i className='bx bxs-quote-single-right' ></i> and publish to the world of Quote-ccessible.
                </p>
                <button className={"btn transparent"} id="sign-up-btn" onClick={handleSignUpMode}>
                Sign up
                </button>
            </div>
            <img src={loginImage} className="image" alt="" />
            </div>
            <div className="panel right-panel">
                <div className="content">
                    <h3>One of us ?</h3>
                    <p>
                    So lets Sign in and write your own <i className='bx bxs-quote-single-left' ></i><b>QUOTE</b><i className='bx bxs-quote-single-right' ></i> and publish to the world of Quote-ccessible.
                    </p>
                    <button className={"btn transparent"} id="sign-in-btn" onClick={handleSignUpMode}>
                    Sign in
                    </button>
                </div>
                <img src={registerImage} className="image" alt="" />
                <footer> <b> Quote-ccessible</b>
                    <br />
                    <p>&#169; all rights reserved</p>
                </footer>
            </div>
        </div>
        </div>
    );
}

export default Account;
