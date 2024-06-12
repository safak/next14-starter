import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import UserCard from "./../components/UserCard";
import Firstpage from "../components/Firstpage";
import Blogform from "../components/Blogform";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <div>
          <Firstpage />
        </div>
      )}
    </>
  );
}
