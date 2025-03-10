export default function AuthorSkeleton() {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-[40px] h-[40px] rounded-full bg-gray-300 animate-pulse"></div>

      <div className="flex flex-col">
        <span className="text-gray-400">Author</span>
        <div className="w-20 h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>

      <div className="flex flex-col">
        <span className="text-gray-400">Published</span>
        <div className="w-16 h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
}
