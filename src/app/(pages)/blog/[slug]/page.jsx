// import { getPostById } from "@/app/actions/postActions";
import Author from "@/components/author-info/Author";
import AuthorSkeleton from "@/components/author-skeleton/AuthorSkeleton";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async (id) => {
  const res = await fetch(`${API_URL}/api/blog/${id}`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    console.error("Failed to fetch author:", res.statusText);
    return null;
  }

  return await res.json();
};

export default async function SinglePost({ params }) {
  const id = params?.slug;

  if (isNaN(Number(id)) || !id) {
    return notFound();
  }

  const post = await fetchData(id);

  return (
    <div className="grid md:grid-cols-[450px_1fr] gap-12">
      <section className="min-h-[30rem] md:min-h-[35rem] w-full relative flex-1">
        <Image src={post.image} alt="blog image" fill />
      </section>

      <section className="flex flex-col gap-8 flex-3">
        <h1 className="text-5xl font-bold">{post.title}</h1>

        <Suspense fallback={<AuthorSkeleton />}>
          <Author userId={post.authorId} postId={post.id} />
        </Suspense>

        <p className="whitespace-break-spaces">{post.content}</p>
      </section>
    </div>
  );
}
