"use client";

import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import { useActionState, useEffect } from "react";
import Swal from "sweetalert2";
import Input from "../Input";
import { create } from "@/actions/admin/attributes";

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
          router.push("/admin-panel/management/attributes");
        });
      }
    }
  }, [state.success, state.errors, state.message, router]);

  return (
    <form action={formAction}>
      <div className="mb-6">
        <Input label="نام" name="name" errorText={state?.errors?.name} />
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled={pending}
          type="submit"
          className="cursor-pointer text-white disabled:bg-gray-700 bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
        >
          ایجاد ویژگی
        </button>

        <Link
          href="/admin-panel/management/attributes"
          className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          بازگشت
        </Link>
      </div>
    </form>
  );
}
