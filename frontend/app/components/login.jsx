import Link from 'next/link'

export default function Login() {
  return (
    <>
    <form className="loginForm">
      <div className="emailLoginContainer">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
      </div>

      <div className="passwordLoginContainer">
        <label htmlFor="email">Password:</label>
        <input type="text" name="email" />
      </div>

      <button type='submit'>Submit</button>

      <Link href='/signup'>Signup</Link>
    </form>

    
    </>
    
  );
}
