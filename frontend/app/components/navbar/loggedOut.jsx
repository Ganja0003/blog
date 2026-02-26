import Link from 'next/link'
export default function LoggedOut(){
    return(
        <>
        <div className='navBarLoggedOut'>
            <div className="navTitle"><h1>Blog</h1></div>
            <div className="navButtons">
                <button className='logInButton'><Link href='/login' className='link'>Login</Link></button>
                <button className='signUpButton'><Link href='/signup' className='link'>Signup</Link></button>
            </div>
            
        </div>
        
        </>
    );
}