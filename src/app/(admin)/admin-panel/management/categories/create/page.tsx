import Create from "@/components/admin/categories/Create";

export default function CreateCategoryPage() {
  return (
    <section className="shadow-md p-5 bg-white border border-gray-300 dark:bg-gray-800 dark:border-none rounded">
      <div className="flex flex-col space-y-6">
        <h1 className="text-xl text-center">ایجاد دسته بندی</h1>

        <div className="flex flex-col w-full">
          {/* Create Category Form */}
          <Create />
        </div>
      </div>
    </section>
  );
}
