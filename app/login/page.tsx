import React from "react";
import { Link } from "react-router-dom"; // Import Link from your routing library

const Login: React.FC = () => {
  return (
    <div id="login_signup">
      <h1>Log in</h1>
      <form action="/login" method="post">
        <label htmlFor="username">Username</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <button type="submit">LOG IN</button>
        <p>
          Dont have an account? <Link to="/signup">Sign up.</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
