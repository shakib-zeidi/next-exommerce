import Edit from "@/components/admin/categories/Edit";

export default async function EditCategoryPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  return (
    <section className="shadow-md p-5 bg-white border border-gray-300 dark:bg-gray-800 dark:border-none rounded">
      <div className="flex flex-col space-y-6">
        <h1 className="text-xl text-center">ویرایش دسته بندی</h1>

        <div className="flex flex-col w-full">
          {/* Edit Category Form */}
          <Edit id={id} />
        </div>
      </div>
    </section>
  );
}
