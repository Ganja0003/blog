
export default async function AllPosts(){
    const res = await fetch('http://127.0.0.1:3001/posts');
    const posts = await res.json()
    console.log(posts)
 return(
    <>
    {posts.map(post => (
      <div key={post.id}>
         <h1>{post.title}</h1>
         <p>{post.content}</p>
         <p>{post.created_at.slice(0,10)}</p>
      </div>
    )
      
      
    )}
    </>
 );
}