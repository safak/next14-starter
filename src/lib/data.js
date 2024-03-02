import { Post } from "./models";
import { connectToDb } from "./utils";
// const users = [
//     {id:1, name: 'John'},
//     {id:2, name: 'Jane'},
// ]
// const posts = [
//     {id:1, title: 'post1', body: '.......', userId: 1},
//     {id:2, title: 'post2', body: '.......', userId: 1},
//     {id:3, title: 'post3', body: '.......', userId: 2},
//     {id:4, title: 'post4', body: '.......', userId: 2},
// ]


export const getPosts = async () => {
  //  return posts;
try{
    connectToDb()
    const posts = await Post.find()
    return posts;
}catch(err){
    console.log(err)
    throw new Error("Failed to fetch posts!");
}

}

export const getPost = async (id) => {
    const post =  posts.find((post) => post.id === parseInt(id))
    return post;
}

export const getUser = async (id) => {
    const user = users.find((user) => user.id === parseInt(id))
    return user
}