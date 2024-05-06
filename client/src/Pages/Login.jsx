import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Login, loading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await Login(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your Email"
        required={true}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your Password"
        required={true}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={loading}>Log in</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
