import Link from "next/link";
import Delete from "./Delete";
import { IndexTagsInterface } from "@/contracts/admin/tags";
import { index } from "@/actions/admin/tags";

export default async function Index() {
  const data: IndexTagsInterface[] = await index();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
      <table className="w-full text-sm lg:text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>

            <th scope="col" className="px-6 py-3">
              نام
            </th>

            <th scope="col" className="px-6 py-3">
              نام انگلیسی
            </th>

            <th scope="col" className="px-6 py-3">
              <span>اقدامات</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((tag) => (
            <tr
              key={tag?.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {tag?.id}
              </th>

              <td className="px-6 py-4 font-medium text-indigo-600 dark:text-green-500 hover:underline">
                <Link href={`/admin-panel/management/tags/show/${tag?.id}`}>{tag?.name}</Link>
              </td>

              <td className="px-6 py-4">{tag?.slug}</td>

              <td className="px-6 py-4 text-right space-x-5">
                <Link
                  href={`/admin-panel/management/tags/edit/${tag?.id}`}
                  className="font-medium text-indigo-600 dark:text-green-500 hover:underline"
                >
                  ویرایش
                </Link>

                <Delete id={tag?.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
