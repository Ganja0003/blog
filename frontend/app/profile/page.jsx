import {cookies} from 'next/headers'
import ProfileClient from "./profileClient";

export default async function Profile() {
  const cookieHolder = await cookies();
  const tokenholder = cookieHolder.get('token');
  const token = tokenholder.value
  

  

  

  return <ProfileClient token={token}/>;
}
