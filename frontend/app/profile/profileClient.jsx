"use client";
import { useState, useEffect } from "react";
import Loggedin from "../components/navbar/loggedIn";

export default function ProfileClient({token}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('http://127.0.0.1:3001/profile',{
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
        
      })
      const data = await res.json()
      setUser(data)
    };
    

    getUser()
  },[]);


  if(!user){
    return <h1>Loading...</h1>
  }


  return (<>
  <Loggedin/> <h1>Welcome to your profile {user.name}</h1>
  </>);
}
