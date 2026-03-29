"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Loggedin() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout() {
    const res = await fetch("http://127.0.0.1:3001/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    if (res.ok) {
      router.push("/");
    }
  }

  return (
    <>
      <div className="navBarLoggedIn">
        <div className="navTitle">
          <h1>Blog</h1>
        </div>
        <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
        <div className={`navLinks ${menuOpen ? "active" : ""}`}>
          <Link href="/" className="link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/profile" className="link" onClick={() => setMenuOpen(false)}>
            Profile
          </Link>
          <Link href="/post" className="link" onClick={() => setMenuOpen(false)}>
            Create Post
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}
