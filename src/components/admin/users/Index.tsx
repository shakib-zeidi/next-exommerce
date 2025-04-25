import { index } from "@/actions/admin/users";
import { IndexUsersInterface } from "@/contracts/admin/users";
import Link from "next/link";
import Delete from "./Delete";

export default async function Index() {
  const users: IndexUsersInterface[] = await index();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
      <table className="w-full text-sm lg:text-base text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>

            <th scope="col" className="px-6 py-3">
              نام کاربری
            </th>

            <th scope="col" className="px-6 py-3">
              ایمیل
            </th>

            <th scope="col" className="px-6 py-3">
              شماره همراه
            </th>

            <th scope="col" className="px-6 py-3">
              <span>اقدامات</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user?.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user?.id}
              </th>

              <td className="px-6 py-4 font-medium text-indigo-600 dark:text-green-500 hover:underline">
                <Link href={`/admin-panel/management/users/show/${user?.id}`}>
                  {user?.username}
                </Link>
              </td>

              <td className="px-6 py-4">{user?.email}</td>

              <td className="px-6 py-4">{user?.phone_number}</td>

              <td className="px-6 py-4 text-right space-x-5">
                <Link
                  href={`/admin-panel/management/users/edit/${user?.id}`}
                  className="font-medium text-indigo-600 dark:text-green-500 hover:underline"
                >
                  ویرایش
                </Link>

                <Delete id={user?.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
