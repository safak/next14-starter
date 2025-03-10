"use client";

import { registerUser } from "@/app/actions/authActions";
import Link from "next/link";
import { useFormState } from "react-dom";
import RegisterBtn from "../register-btn/RegisterBtn";
import { useState } from "react";
import CustomDialog from "../dialog/Dialog";

export default function LoginForm() {
  const [state, formAction] = useFormState(registerUser, {});
  const [showDialog, setShowDialog] = useState(false);

  if (state?.success && !showDialog) {
    setShowDialog(true);
  }

  return (
    <div className="p-8 md:p-12 bg-primary-soft w-[500px]">
      <form className="w-full flex flex-col gap-8 text-sm" action={formAction}>
        <label htmlFor="username">
          <input
            className="bg-primary p-4.5 rounded-md w-full"
            type="text"
            placeholder="Full Name"
            id="username"
            name="name"
          />
        </label>

        <label htmlFor="email">
          <input
            className="bg-primary p-4.5 rounded-md w-full"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
        </label>

        <label htmlFor="password">
          <input
            className="bg-primary p-4.5 rounded-md w-full"
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </label>

        <label htmlFor="password">
          <input
            className="bg-primary p-4.5 rounded-md w-full"
            type="password"
            placeholder="Password again"
            id="password"
            name="passwordAgain"
          />
        </label>

        <RegisterBtn />

        {state?.error && (
          <p className="text-red-500 text-lg text-center">{state.error}</p>
        )}

        <span className="text-center text-[1rem]">
          Have an account?{" "}
          <Link className="font-bold" href="/login">
            Login
          </Link>
        </span>
      </form>

      <CustomDialog
        open={showDialog}
        onClose={() => (window.location.href = "/login")}
        title="Registration Successful"
        message="Your account has been created successfully! Click Ok to login"
      />
    </div>
  );
}
