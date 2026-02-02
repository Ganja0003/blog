"use client";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  console.log(formData);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:3001/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("User created");
    }
  }
  return (
    <form className="signUpForm" onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      <div className="nameSignupContainer">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormData}
        />
      </div>

      <div className="emailSignupContainer">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleFormData}
        />
      </div>

      <div className="passwordSignupContainer">
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleFormData}
        />
      </div>

      <button type="submit">Submit</button>

      <Link href="/">Login</Link>
    </form>
  );
}
