'use client'
import Link from 'next/link'
export default function Loggedin(){

    function handleLogout(){
        document.cookie = 'token=; max-age=0; path=/'
        window.location.href = '/'
    }
    return(
        <>
        
        
        <div className='navBarLoggedIn'>
            <div className="navTitle"><h1>Blog</h1></div>
            <div className="navLinks">
                <Link href='/profile' className='link'>Profile</Link>
                <Link href='/create' className='link'>Create Post</Link>
                <button onClick={handleLogout}>Logout</button>
            </div>
            
        </div>
        </>
    );
}