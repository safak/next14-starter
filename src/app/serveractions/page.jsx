

const AddPost = () => {
    return (
        <div>
            <form action="" className="">
                <input type="text" placeholder="Title" name="title"/>
                <input type="text" placeholder="Description" name="description"/>
                <input type="text" placeholder="slug" name="slug"/>
                <input type="text" placeholder="userId" name="userId"/>

                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default AddPost;