"use client";

import { register } from "@/actions/home/auth";
import { AuthState } from "@/contracts/home/auth";
import { useRouter } from "nextjs-toploader/app";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

export default function Register() {
  const router = useRouter();
  const [state, formAction, pending] = useActionState<AuthState, FormData>(register, {
    success: false,
    errors: {},
    message: "",
  });

  useEffect(() => {
    if (state.success || Object.keys(state.errors).length > 0) {
      if (state.success) {
        router.push("/auth/login");
        toast.success(state.message);
      }
    }
  }, [state.success, state.errors, state.message, router]);

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form action={formAction} className="space-y-6">
        <div>
          <label
            htmlFor="username"
            className="block text-sm/6 font-medium text-gray-900"
          >
            نام کاربری
          </label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          <p className="text-sm text-red-500 mt-2">{state.errors?.username}</p>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-900"
          >
            ایمیل
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          <p className="text-sm text-red-500 mt-2">{state.errors?.email}</p>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-900"
            >
              رمز عبور
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
          <p className="text-sm text-red-500 mt-2">{state.errors?.password}</p>
        </div>

        <div>
          <button
            disabled={pending}
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
          >
            ساخت حساب کاربری
          </button>
        </div>
      </form>
    </div>
  );
}
