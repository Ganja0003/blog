"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import LoggedOut from "./navbar/loggedOut";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(formData),
        
      });
      const data = await res.json();
      if (res.ok) {
        console.log("Logged in", data);
        router.push("/");
      }else{
        console.log('Login failed',data);
      }
      
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
    <LoggedOut/>
    <div className="loginContainer">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="emailLoginContainer">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleFormData}
          />
        </div>

        <div className="passwordLoginContainer">
          <label htmlFor="password">Password:</label>
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleFormData}
          />
        </div>

        <button type="submit" className="submit">Submit</button>

        <Link href="/signup" className="link">Signup</Link>
      </form>
      </div>
    </>
  );
}
