"use client";

import { useFormStatus } from "react-dom";

export default function RegisterBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      className="p-4.5 font-bold bg-txt-btn rounded-md  text-txt cursor-pointer"
      type="submit"
      disabled={pending}
    >
      Register
    </button>
  );
}
