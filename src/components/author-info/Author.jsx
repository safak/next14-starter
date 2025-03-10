import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async (id) => {
  const res = await fetch(`${API_URL}/api/users/${id}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    console.error("Failed to fetch author:", res.statusText);
    return null;
  }

  return await res.json();
};

export default async function Author({ userId, postId }) {
  const author = await fetchData(userId);

  const currPost = author?.posts.find((post) => post.id === postId);

  const date = new Date(currPost.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex gap-4 items-center">
      <div className="w-[40px] h-[40px] relative">
        <Image
          className="rounded-full object-cover"
          src={author.avatar}
          alt="Avatar"
          fill
        />
      </div>

      <div className="flex flex-col">
        <span className="text-gray-400">Author</span>
        <span>{author.name}</span>
      </div>

      <div className="flex flex-col">
        <span className="text-gray-400">Published</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
