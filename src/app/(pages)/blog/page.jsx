import BlogPage from "./Blogpage";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetchData = async () => {
  const res = await fetch(`${API_URL}/api/blog`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) {
    console.error("Failed to fetch author:", res.statusText);
    return null;
  }
  return await res.json();
};

export default async function page() {
  const post = await fetchData();
  return (
    <>
      <BlogPage data={post} />
    </>
  );
}
