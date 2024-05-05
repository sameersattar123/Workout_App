import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
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
      <button>Sign up</button>
    </form>
  );
};

export default Signup;
