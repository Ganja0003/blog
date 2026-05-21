'use client'
import Navbar from "../components/navbar/navbar";
import { useState } from "react";

export default function PostClient(){
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
        credentials: 'include',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(post),
    })
    const data = await res.json();
    console.log(data)
}



    return(
    <>
    <Navbar/>
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