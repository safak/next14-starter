import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";
//  FETCH DATA WITH API
const getData = async ()=>{
  //  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}})
    const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}})
    
    if(!res.ok) {
        throw new Error("Something went wrong")
    }

    return res.json()
}
const Blogpage = async () => {
    //  FETCH DATA WITH API
    const posts = await getData()

  //  FETCH DATA WITHOUT API
  // const posts = await getPosts();
    return (
        <div className={styles.container}>
            {posts.map((post)=>(
                <div className={styles.post} key={post.id}> 
                <PostCard post={post} />  
            </div>
            ))}
            
            
        </div>
    )
}

export default Blogpage