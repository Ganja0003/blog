import {cookies} from 'next/headers'
import ProfileClient from "./profileClient";

export default async function Profile() {
  const cookieHolder = await cookies();
  const token = cookieHolder.get('token')?.value;
  
  if (!token) {
    return <div>Not authenticated</div>;
  }
  

  

  return <ProfileClient token={token}/>;
}
