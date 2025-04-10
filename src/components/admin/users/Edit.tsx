"use client";

import { edit, show } from "@/actions/admin/users";
import { ShowUserInterface } from "@/contracts/admin/users";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import { useActionState, useEffect, useState } from "react";
import Swal from "sweetalert2";
import Input from "../Input";
import Checkbox from "../Checkbox";

export default function Edit({ id }: { id: number }) {
  const router = useRouter();
  const [user, setUser] = useState<ShowUserInterface>();
  const [isSuperuser, setIsSuperuser] = useState(false);
  const [isStaff, setIsStaff] = useState(false);

  const editWithId = (
    state: { success: boolean; errors: Record<string, string> },
    formData: FormData
  ) => {
    formData.append("id", id.toString());
    return edit(state, formData);
  };

  const [state, formAction, pending] = useActionState(editWithId, {
    success: false,
    errors: {},
    message: "",
  });

  useEffect(() => {
    const fetchUserData = async (id: number) => {
      const data = await show(id);
      setUser(data);
      setIsSuperuser(data?.is_superuser || false);
      setIsStaff(data?.is_staff || false);
    };

    fetchUserData(id);
  }, [id]);

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
        <Input label="نام" name="first_name" defaultValue={user?.first_name} />
      </div>

      <div className="mb-6">
        <Input
          label="نام خانوادگی"
          name="last_name"
          defaultValue={user?.last_name}
        />
      </div>

      <div className="mb-6">
        <Input
          label="شماره همراه"
          name="phone_number"
          defaultValue={user?.phone_number}
        />
      </div>

      <div className="mb-6">
        <Input
          label="نام کاربری"
          name="username"
          defaultValue={user?.username}
          errorText={state?.errors?.username}
        />
      </div>

      <div className="mb-6">
        <Input
          label="ایمیل"
          name="email"
          type="email"
          defaultValue={user?.email}
          errorText={state?.errors?.email}
        />
      </div>

      <div className="mb-6">
        <Input
          label="رمز عبور"
          name="password"
          type="password"
          defaultValue={user?.password}
          errorText={state?.errors?.password}
        />
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <div>
          <h3>کاربر ادمین باشد؟</h3>
        </div>

        <div className="flex items-center">
          <Checkbox
            label="مدیر کل"
            name="is_superuser"
            value="true"
            checked={isSuperuser}
            onChange={(e) => setIsSuperuser(e.target.checked)}
          />
        </div>

        <div className="flex items-center">
          <Checkbox
            label="ادمین (دسترسی محدود)"
            name="is_staff"
            value="true"
            checked={isStaff}
            onChange={(e) => setIsStaff(e.target.checked)}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          disabled={pending}
          type="submit"
          className="cursor-pointer text-white disabled:bg-gray-700 bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800"
        >
          ویرایش کاربر
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
