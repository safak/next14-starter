"use client";

import { loginUser } from "@/app/actions/authActions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import LoginBtn from "../login-btn/LoginBtn";

export default function LoginForm() {
  const [state, formAction] = useFormState(loginUser, {});
  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/");
    }
  }, [state, router]);
  return (
    <div className="p-8 md:p-12 bg-primary-soft w-[500px]">
      <form className="w-full flex flex-col gap-8 text-sm" action={formAction}>
        <label htmlFor="username">
          <input
            className="bg-primary p-4.5 rounded-md w-full "
            type="email"
            placeholder="email"
            id="email"
            name="email"
          />
        </label>

        <label htmlFor="password">
          <input
            className="bg-primary p-4.5 rounded-md w-full "
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </label>

        <LoginBtn />

        {state?.error && (
          <p className="text-red-500 text-lg text-center">{state.error}</p>
        )}
        <span className="text-center text-[1rem]">
          Don&#39;t have an account?{" "}
          <Link className="font-bold" href="/register">
            Register
          </Link>{" "}
        </span>
      </form>
    </div>
  );
}
