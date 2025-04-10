"use client";

import { create } from "@/actions/admin/users";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import { useActionState, useEffect } from "react";
import Swal from "sweetalert2";
import Input from "../Input";
import Checkbox from "../Checkbox";

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
        <Input label="نام (اختیاری)" name="first_name" />
      </div>

      <div className="mb-6">
        <Input label="نام خانوادگی (اختیاری)" name="last_name" />
      </div>

      <div className="mb-6">
        <Input label="شماره همراه (اختیاری)" name="phone_number" />
      </div>

      <div className="mb-6">
        <Input
          label="نام کاربری"
          name="username"
          errorText={state?.errors?.username}
        />
      </div>

      <div className="mb-6">
        <Input
          label="ایمیل"
          name="email"
          errorText={state?.errors?.email}
          type="email"
        />
      </div>

      <div className="mb-6">
        <Input
          label="رمز عبور"
          name="password"
          errorText={state?.errors?.password}
          type="password"
        />
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <div>
          <h3>کاربر ادمین باشد؟</h3>
        </div>

        <div className="flex items-center">
          <Checkbox label="مدیر کل" name="is_superuser" value="true" />
        </div>

        <div className="flex items-center">
          <Checkbox label="ادمین (دسترسی محدود)" name="is_staff" value="true" />
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
