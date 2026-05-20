import {cookies} from 'next/headers'
import Navbar from './components/navbar/navbar';

import AllPosts from './components/allPosts'

export const dynamic = "force-dynamic";

export default async function Home(){
    return(
        <>
        {<Navbar/>}
        {<AllPosts/>}
        </>
    );
}