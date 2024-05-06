import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup , loading , error } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email , password)

    setEmail('')
    setPassword('')
  };
  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>
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
      <button disabled={loading}>Sign up</button>
      {
        error && <div className="error">{error}</div>
      }
    </form>
  );
};

export default Signup;
