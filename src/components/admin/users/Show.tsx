import { show } from "@/actions/admin/users";
import { ShowUserInterface } from "@/contracts/admin/users";
import Link from "next/link";

export default async function Show({ id }: { id: number }) {
  const data: ShowUserInterface = await show(id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="dark:bg-gray-500 bg-slate-200 p-2 rounded">
        <h3 className="text-sm md:text-base">
          <span className="dark:text-yellow-300 text-blue-700">نام :</span> {data?.first_name}
        </h3>
      </div>

      <div className="dark:bg-gray-500 bg-slate-200 p-2 rounded">
        <h3 className="text-sm md:text-base">
          <span className="dark:text-yellow-300 text-blue-700">نام خانوادگی :</span> {data?.last_name}
        </h3>
      </div>

      <div className="dark:bg-gray-500 bg-slate-200 p-2 rounded">
        <h3 className="text-sm md:text-base">
          <span className="dark:text-yellow-300 text-blue-700">شماره همراه :</span> {data?.phone_number}
        </h3>
      </div>

      <div className="dark:bg-gray-500 bg-slate-200 p-2 rounded">
        <h3 className="text-sm md:text-base">
          <span className="dark:text-yellow-300 text-blue-700">نام کاربری :</span> {data?.username}
        </h3>
      </div>

      <div className="dark:bg-gray-500 bg-slate-200 p-2 rounded">
        <h3 className="text-sm md:text-base">
          <span className="dark:text-yellow-300 text-blue-700">ایمیل :</span> {data?.email}
        </h3>
      </div>

      <div className="dark:bg-gray-500 bg-slate-200 p-2 rounded space-y-1">
        <h3 className="text-sm md:text-base dark:text-yellow-300 text-blue-700">نقش کاربر :</h3>
        <div className="flex items-center">
          <input
            id="is_superuser"
            type="checkbox"
            value="true"
            name="is_superuser"
            defaultChecked={data?.is_superuser}
            disabled
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:outline-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />

          <label htmlFor="is_superuser" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            مدیرکل
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="is_staff"
            type="checkbox"
            value="true"
            name="is_staff"
            defaultChecked={data?.is_staff}
            disabled
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:outline-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          
          <label htmlFor="is_staff" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            ادمین (دسترسی محدود)
          </label>
        </div>
      </div>

      <div>
        <Link
          href="/admin-panel/management/users"
          className="dark:bg-gray-500 dark:hover:bg-gray-600 bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-1 text-sm"
        >
          بازگشت
        </Link>
      </div>
    </div>
  );
}
