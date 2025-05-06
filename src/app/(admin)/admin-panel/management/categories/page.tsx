import Index from "@/components/admin/categories/Index";
import { Search } from "lucide-react";
import Link from "next/link";

export default async function IndexCategoriesPage() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="text-xl">لیست دسته بندی ها</h1>

        <div className="flex justify-center items-center w-64 relative max-md:hidden">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="جستجو..."
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-tr rounded-br block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
          />

          <button className="absolute -left-1 bg-blue-700 hover:bg-blue-800 rounded-tl rounded-bl p-2 cursor-pointer">
            <Search size={23} className="text-white" />
          </button>
        </div>

        <Link
          href="/admin-panel/management/categories/create"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          ایجاد دسته بندی
        </Link>
      </div>

      {/* Categories List Table */}
      <Index />
    </section>
  );
}
