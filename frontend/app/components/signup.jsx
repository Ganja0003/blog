import Link from "next/link";
export default function Signup() {
  return (
    <form className="signUpForm">
        <h1>SignUp</h1>
      <div className="nameSignupContainer">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
      </div>

      <div className="emailSignupContainer">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
      </div>

      <div className="passwordSignupContainer">
        <label htmlFor="password">Password:</label>
        <input type="text" name="password" />
      </div>

      <button type="submit">Submit</button>

      <Link href="/">Login</Link>
    </form>
  );
}
