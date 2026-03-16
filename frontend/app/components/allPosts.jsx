
export default async function AllPosts(){
    const res = await fetch('http://127.0.0.1:3001/posts');
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