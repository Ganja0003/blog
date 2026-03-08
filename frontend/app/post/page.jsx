import {cookies} from 'next/headers'
import PostClient from "./postClient";

export default async function Post(){
const cookieHolder = await cookies();
const tokenholder = cookieHolder.get('token');
const token = tokenholder.value

    return <PostClient token={token}/>;
}