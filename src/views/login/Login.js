import React, { useCallback } from "react";

import "../login/login.scss";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const response = await fetch("https://fullstack.exercise.applifting.cz/login", {
      method: "POST",
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        'X-API-KEY': '6a4fca7d-0167-4ca6-bba8-e8016ab13d71'
      },
      body: JSON.stringify({
        username: email,
        password
      })
    });

    const { access_token } = await response.json();

    if (response.status !== 200) {
      return;
    }

    localStorage.setItem("token", access_token);
    window.location.href = "/";
  }, [email, password]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Log In</h1>
        <div className="login-input">
          <label>Email</label> <br />
          <input
            className="form-control"
            value={email}
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div className="pass-input">
          <label>Password</label> <br />
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
