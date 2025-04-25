import Show from "@/components/admin/attributes/Show";

export default async function ShowAttributePage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  return (
    <section className="shadow-md p-5 bg-white border border-gray-300 dark:bg-gray-800 dark:border-none rounded">
      <div className="flex flex-col space-y-6">
        <h1 className="text-xl text-center">اطلاعات ویژگی</h1>
        {/* Show Attribute Table */}
        <Show id={id} />
      </div>
    </section>
  );
}
