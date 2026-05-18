import {cookies} from 'next/headers'
import LoggedOut from './components/navbar/loggedOut';
import LoggedIn from './components/navbar/loggedIn';
import AllPosts from './components/allPosts'

export const dynamic = "force-dynamic";

export default async function Home(){
    const cookieReq = await cookies();
    const token = cookieReq.get('token')
    console.log(token)
    console.log('testing')
    return(
        <>
        {!token && <LoggedOut/>}
        {token && <LoggedIn/>}
        {<AllPosts/>}
        </>
    );
}