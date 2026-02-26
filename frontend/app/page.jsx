import Link from 'next/link'
import {cookies} from 'next/headers'


export default async function Home(){
    const cookieReq = await cookies();
    const token = cookieReq.get('token')
    return(
        <>
        {!token && (
            <>
            <Link href='/login'>Login</Link>
            <Link href='/signup'>Signup</Link>
            </>
        )}
        {token && <h1>Welcome to homepage</h1>}
        </>
    );
}