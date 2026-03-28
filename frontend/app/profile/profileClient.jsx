"use client";
import { useState, useEffect } from "react";
import Loggedin from "../components/navbar/loggedIn";

export default function ProfileClient({token}) {
  const [user, setUser] = useState(null);
  const [posts,setPosts] = useState();

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('http://127.0.0.1:3001/profile',{
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
        
      })
      const data = await res.json()
      setUser(data.user)
      setPosts(data.posts)
    };
    

    getUser()
  },[]); 


   async function handleDelete(id){
    await fetch(`http://127.0.0.1:3001/posts/${id}`,{
      method:'DELETE',
      headers:{
        Authorization: `Bearer ${token}`
      }
    }
      

    )
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
   }


  if(!user){
    return <h1>Loading...</h1>
  }


  return (<>
  <Loggedin/> 
  <h1>Welcome to your profile {user.name}</h1>
  <div className="postList">
    {posts.map(post => (
      <div key={post.id} className="postCard">
         <h1 className="postTitle">{post.title}</h1>
         <p className="postContent">{post.content}</p>
         <p className="postCreatedAt">{post.created_at.slice(0,10)}</p>
         <button onClick={() =>handleDelete(post.id)}>Delete</button>
      </div>
    )
    )}
    </div>
  </>);
}
