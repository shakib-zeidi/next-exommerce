import Link from "next/link";
import Delete from "./Delete";
import { IndexAttributesInterface } from "@/contracts/admin/attributes";
import { index } from "@/actions/admin/attributes";

export default async function Index() {
  const attributes: IndexAttributesInterface[] = await index();

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
              <span>اقدامات</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {attributes.map((attribute) => (
            <tr
              key={attribute?.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {attribute?.id}
              </th>

              <td className="px-6 py-4 font-medium text-indigo-600 dark:text-green-500 hover:underline">
                <Link href={`/admin-panel/management/attributes/show/${attribute?.id}`}>{attribute?.name}</Link>
              </td>

              <td className="px-6 py-4 text-right space-x-5">
                <Link
                  href={`/admin-panel/management/attributes/edit/${attribute?.id}`}
                  className="font-medium text-indigo-600 dark:text-green-500 hover:underline"
                >
                  ویرایش
                </Link>

                <Delete id={attribute?.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
