import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
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
      <button>Log in</button>
    </form>
  );
};

export default Login;
