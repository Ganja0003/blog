"use client";
import { useState, useEffect } from "react";
import LoggedIn from "./loggedIn";
import LoggedOut from "./loggedOut";

export default function Navbar() {
  const [authenticated, setAuthenticated] = useState(null);
  const URL = "https://easygoing-imagination-production-0598.up.railway.app";

  useEffect(() => {
    async function auth() {
      try {
        const res = await fetch(`${URL}/profile`, {
            credentials: 'include'
        });
        setAuthenticated(res.ok)
      } catch (err) {
        console.log(err);
        setAuthenticated(false);
      }
    } auth()
  }, []);

  if(authenticated === null){
    return <p>loading ....</p>
  }

  return authenticated ? <LoggedIn/> : <LoggedOut/>;
}
