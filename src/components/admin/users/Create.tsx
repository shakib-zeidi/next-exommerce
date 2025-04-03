"use client";

import { create } from "@/actions/admin/users";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import { useActionState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Create() {
  const router = useRouter();

  const [state, formAction, pending] = useActionState(create, {
    success: false,
    errors: {},
    message: "",
  });

  useEffect(() => {
    if (state.success || Object.keys(state.errors).length > 0) {
      if (state.success) {
        Swal.fire({
          title: "موفقیت آمیز!",
          text: state.message,
          icon: "success",
        }).then(() => {
          router.push("/admin-panel/management/users");
        });
      }
    }
  }, [state.success, state.errors, state.message, router]);

  return (
    <form action={formAction}>
      <div className="mb-6">
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          نام (اختیاری)
        </label>

        <input
          type="text"
          id="first_name"
          name="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          نام خانوادگی (اختیاری)
        </label>

        <input
          type="text"
          id="last_name"
          name="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phone_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          شماره همراه (اختیاری)
        </label>

        <input
          type="text"
          id="phone_number"
          name="phone_number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          نام کاربری
        </label>

        <input
          type="text"
          id="username"
          name="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500 dark:focus:border-blue-500"
        />
        <p className="text-sm text-red-500 mt-2">{state.errors?.username}</p>
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          ایمیل
        </label>

        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500 dark:focus:border-blue-500"
        />
        <p className="text-sm text-red-500 mt-2">{state?.errors?.email}</p>
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          رمز عبور
        </label>

        <input
          type="password"
          id="password"
          name="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:outline-blue-500 dark:focus:border-blue-500"
        />
        <p className="text-sm text-red-500 mt-2">{state?.errors?.password}</p>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <div>
          <h3>کاربر ادمین باشد؟</h3>
        </div>

        <div className="flex items-center">
          <input
            id="is_superuser"
            type="checkbox"
            value="true"
            name="is_superuser"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:outline-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />

          <label htmlFor="is_superuser" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            مدیر کل
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="is_staff"
            type="checkbox"
            value="true"
            name="is_staff"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:outline-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          
          <label htmlFor="is_staff" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            ادمین (دسترسی محدود)
          </label>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled={pending}
          type="submit"
          className="cursor-pointer text-white disabled:bg-gray-700 bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
        >
          ایجاد کاربر
        </button>

        <Link
          href="/admin-panel/management/users"
          className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          بازگشت
        </Link>
      </div>
    </form>
  );
}
