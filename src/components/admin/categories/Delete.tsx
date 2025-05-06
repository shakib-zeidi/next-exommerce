"use client";

import { destroy } from "@/actions/admin/categories";
import { useRouter } from "nextjs-toploader/app";
import Swal from "sweetalert2";

export default function Delete({ id }: { id: number }) {
  const router = useRouter();

  const handleDelete = () => {
    Swal.fire({
      title: "آیا مطمئن هستید؟",
      text: "در صورت تایید تغییرات غیرقابل بازگشت می باشد!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله",
      cancelButtonText: "خیر",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await destroy(id);
        Swal.fire({
          title: "موفقیت آمیز",
          text: "دسته بندی با موفقیت حذف شد",
          icon: "success",
        });
        router.refresh();
      }
    });
  };

  return (
    <>
      <button
        onClick={handleDelete}
        className="text-red-600 dark:text-yellow-300 hover:underline cursor-pointer"
      >
        حذف
      </button>
    </>
  );
}
