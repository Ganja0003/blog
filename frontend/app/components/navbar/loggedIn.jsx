import Link from 'next/link'
export default function Loggedin(){
    return(
        <>
        
        
        <div className='navBarLoggedIn'>
            <div className="navTitle"><h1>Blog</h1></div>
            <div className="navLinks">
                <Link href='/profile' className='link'>Profile</Link>
                <Link href='/create' className='link'>Create Post</Link>
                <Link href='/' className='link'>Logout</Link>
            </div>
            
        </div>
        </>
    );
}