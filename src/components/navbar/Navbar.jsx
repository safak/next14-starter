import Link from "next/link";
import Links from "./Links";
import { getUser } from "@/app/actions/authActions";

export default async function Navbar() {
  const session = await getUser();
  return (
    <header className="flex justify-between items-center h-fit">
      <Link className={`font-bold text-3xl`} href="/">
        Logo
      </Link>
      <Links session={session} />
    </header>
  );
}
