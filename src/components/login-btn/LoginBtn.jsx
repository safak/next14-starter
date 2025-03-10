"use client";

import { useFormStatus } from "react-dom";

export default function LoginBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      className="p-4.5 font-bold bg-txt-btn rounded-md  text-txt cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-900"
      type="submit"
      disabled={pending}
    >
      {pending ? "Logging In..." : "Login"}
    </button>
  );
}
