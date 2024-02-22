import { addPost } from "@/shared/lib/actions";

const deletePost = async (formData) => {
    "use server"
    const slug = formData.get("id");
    try {
        const res = await fetch(`/api/serveractions/${slug}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!res.ok) {
            throw new Error("Failed to delete post");
        }

        return await res.json(); // Return the JSON response
    } catch (error) {
        console.error("Error deleting post:", error);
        throw new Error("Failed to delete post"); // Re-throw the error
    }
}

const AddPost = () => {
    return (
        <div>
            <form action={addPost} className="text-black">
                <input type="text" placeholder="Title" name="title"/>
                <input type="text" placeholder="Description" name="description"/>
                <input type="text" placeholder="slug" name="slug"/>
                <input type="text" placeholder="userId" name="userId"/>

                <button type="submit">Add Post</button>
            </form>

            <form action={deletePost} className="text-black">
                <input type="text" placeholder="id" name="id"/>
                <button type="submit">Delete Post</button>
            </form>
        </div>
    )
}

export default AddPost;