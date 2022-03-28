import React, {useState, useEffect} from 'react'
import axios from 'axios'

import '../login/login.scss'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const hendleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      email,
      password
    }
    axios.post('https://my-json-server.typicode.com/Naiio97/demo/myArticles')
  }

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
                    >
                </input>
            </div>
            <div className="pass-input">
                <label>Password</label> <br />
                <input
                    type="password"
                    className="form-control"
                    value="Password"
                    placeholder="Your password"
                    required
                    >
                </input>
            </div>
            <button type="submit">Log In</button>

           
        </form>
    </div>

  )
}

export default Login