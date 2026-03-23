"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Loggedin() {
  const router = useRouter();

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
        <div className="navLinks">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/profile" className="link">
            Profile
          </Link>
          <Link href="/post" className="link">
            Create Post
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </>
  );
}
