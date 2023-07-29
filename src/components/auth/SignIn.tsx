import React from "react";
import "./SignIn.scss";
import google from "../../assets/google-icon.png";
import { Link } from "react-router-dom";
const SignIn: React.FC<{}> = () => {
  // Doğru kullanım: Bir ReactNode döndürüyor
  return (
    <div className="sign-in">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>

        <label placeholder="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label placeholder="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>
        <div className="social">
          <div className="google">
            <img src={google} alt="Google Logo" className="google-icon" />
            <span className="btn-text">Google ile Giriş Yap</span>
          </div>
        </div>
        <div className="sign-up">
          <p>
            Don't have an account yet?{" "}
            <a href="/signup">
              <b> Sign Up</b>
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
