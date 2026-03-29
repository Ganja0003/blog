
export default async function AllPosts(){
   const URL = 'https://easygoing-imagination-production-0598.up.railway.app'
    const res = await fetch(`${URL}/posts`);
    const posts = await res.json()
    console.log(posts)
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