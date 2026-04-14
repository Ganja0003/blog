'use client'
import { useState, useEffect } from "react";
export default function AllPosts(){
   const [posts,setPosts] = useState();
   const URL = 'https://easygoing-imagination-production-0598.up.railway.app';

   useEffect(() => {
      async function fetchPosts(){
         const res = await fetch(`${URL}/posts`,{
            credentials: 'include',
         });
         const data = await res.json()
         console.log(data)
         setPosts(data)
      }
      fetchPosts()
   },[])
   console.log('hey')

    
 return(
    <>
    <div className="postList">
    {posts.map(post => (
      <div key={post.id} className="postCard">
         <h1 className="postTitle">{post.title}</h1>
         <p className="postContent">{post.content}</p>
         <p className="postCreatedAt">{post.created_at.slice(0,10)}</p>
      </div>
    )
      
      
    )}
    </div>
    </>
 );
}