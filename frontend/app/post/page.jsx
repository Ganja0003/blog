import {cookies} from 'next/headers'
import PostClient from "./postClient";

export default async function Post(){
const cookieHolder = await cookies();
const token = cookieHolder.get('token');

    return <PostClient token={token}/>;
}