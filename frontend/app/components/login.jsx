import Link from "next/link";

export default function Login() {
  return (
    <>
      <form className="loginForm">
        <h1>Login</h1>
        <div className="emailLoginContainer">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
        </div>

        <div className="passwordLoginContainer">
          <label htmlFor="password">Password:</label>
          <input type="text" name="password" />
        </div>

        <button type="submit">Submit</button>

        <Link href="/signup">Signup</Link>
      </form>
    </>
  );
}
