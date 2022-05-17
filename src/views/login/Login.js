import React from "react";

import "../login/login.scss";

const Login = () => {
  const hendleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={hendleSubmit} className="login-form">
        <h1>Log In</h1>
        <div className="login-input">
          <label>Email</label> <br />
          <input
            type="email"
            className="form-control"
            value="Email"
            placeholder="Your email"
            required
          ></input>
        </div>
        <div className="pass-input">
          <label>Password</label> <br />
          <input
            type="password"
            className="form-control"
            value="Password"
            placeholder="Your password"
            required
          ></input>
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
