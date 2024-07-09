import React from "react";
import { useState } from "react";
import "./App.css";

function LoginForm() {
  const [email, setEmail] = useState("mark@gmail.com");
  const [password, setPassword] = useState("secret123");
  return (
    <form
      className="login-form"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(email, password);
      }}
    >
      <h1>Login Form</h1>
      <input
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="username"
      />
      <input
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default LoginForm;
