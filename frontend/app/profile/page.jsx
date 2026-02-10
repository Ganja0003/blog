"use client";
import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('http://127.0.0.1:3001/profile',{
        credentials:'include'
      })
      const data = await res.json()
      setUser(data)
    };
    

    getUser()
  },[]);

  console.log(user)

  if(!user){
    return <h1>Loading...</h1>
  }


  return <h1>Welcome to your profile {user.name}</h1>;
}
