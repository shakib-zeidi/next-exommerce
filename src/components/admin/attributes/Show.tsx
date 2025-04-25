import { show } from "@/actions/admin/attributes";
import { ShowAttributeInterface } from "@/contracts/admin/attributes";
import Link from "next/link";

export default async function Show({ id }: { id: number }) {
  const attribute: ShowAttributeInterface = await show(id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="dark:bg-gray-500 bg-slate-200 p-2 rounded">
        <h3 className="text-sm md:text-base">
          <span className="dark:text-yellow-300 text-blue-700">نام :</span> {attribute?.name}
        </h3>
      </div>

      <div>
        <Link
          href="/admin-panel/management/attributes"
          className="dark:bg-gray-500 dark:hover:bg-gray-600 bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-1 text-sm"
        >
          بازگشت
        </Link>
      </div>
    </div>
  );
}
