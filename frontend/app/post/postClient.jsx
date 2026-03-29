'use client'
import Loggedin from "../components/navbar/loggedIn";
import { useState } from "react";

export default function PostClient({token}){
const [post,setPost] = useState({
    title:'',
    content:''
});
const URL = 'https://easygoing-imagination-production-0598.up.railway.app'


function handleChange(e){
 setPost({...post, 
  [e.target.name]: e.target.value
 });
}

console.log(post);

async function handleSubmit(e){
    e.preventDefault()
    const res = await fetch(`${URL}/createPost`,{
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(post),
    })
    const data = await res.json();
    console.log(data)
}


if(!token){
    return <h1>please login</h1>
}


    return(
    <>
    <Loggedin/>
    <div className="createPostContainer">
        <h1>Create Post</h1>
        <form className="createPostForm" onSubmit={handleSubmit}>
            <div className="createPostFormChild">
                <label htmlFor="title">Title</label>
                <input type="text" id='title' name='title' value={post.title} onChange={handleChange} required/>
            </div>
            <div className="createPostFormChild">
                <label htmlFor="content">Content</label>
                <textarea id='content' rows="8" cols='33' name='content' value={post.content} onChange={handleChange} required/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    
    </>
);
}