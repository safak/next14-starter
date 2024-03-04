import { getUser } from "@/lib/data";
import Image from "next/image";
import styles from "./postUser.module.css"
//  FETCH DATA WITH API
// const getUser = async (userId)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    
//     if(!res.ok) {
//         throw new Error("Something went wrong")
//     }

//     return res.json()
// }
const PostUser = async ({userId}) => {

    // const user = await getUser(userId);

    const user = await getUser(userId);

    return (
        <div className={styles.container}>
             <Image 
                    className={styles.avatar}
                    src={user.img ? user.img : "/noavatar.png"}
                    alt=""
                    width={50}
                    height={50}
                />
                <div className={styles.texts}>
                    <span className={styles.title}>Author</span>
                        <span className={styles.username}>{user?.name}</span>
                </div>
                        
        </div>
    )
}

export default PostUser