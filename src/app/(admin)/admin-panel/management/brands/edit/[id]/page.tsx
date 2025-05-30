import Edit from "@/components/admin/brands/Edit";

export default async function EditBrandPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  return (
    <section className="shadow-md p-5 bg-white border border-gray-300 dark:bg-gray-800 dark:border-none rounded">
      <div className="flex flex-col space-y-6">
        <h1 className="text-xl text-center">ویرایش برند</h1>

        <div className="flex flex-col w-full">
          {/* Edit Brand Form */}
          <Edit id={id} />
        </div>
      </div>
    </section>
  );
}
