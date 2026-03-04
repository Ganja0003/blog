import Loggedin from "../components/navbar/loggedIn";
import {cookies} from 'next/headers'

export default async function Post(){
const cookieHolder = await cookies();
const token = cookieHolder.get('token')

if(!token){
    return <h1>please login</h1>
}


    return(
    <>
    <Loggedin/>
    <div className="createPostContainer">
        <h1>Create Post</h1>
        <form className="createPostForm">
            <div className="createPostFormChild">
                <label htmlFor="title">Title</label>
                <input type="text" id='title'/>
            </div>
            <div className="createPostFormChild">
                <label htmlFor="content">Content</label>
                <textarea id='content' rows="8" cols='33'/>
            </div>
            
        </form>
    </div>
    
    </>
);
}