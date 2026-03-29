"use client";
import Link from "next/link";
import { useState } from "react";
import LoggedOut from "./navbar/loggedOut";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const URL = 'https://easygoing-imagination-production-0598.up.railway.app'

  function handleFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  console.log(formData);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`${URL}/auth/signup`, {
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

    <>
    <LoggedOut/>
    <div className="signupContainer">
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

      <button type="submit" className="submit">Submit</button>

      <Link href="/login" className="link">Login</Link>
    </form>
    </div>
    </>
  );
}
