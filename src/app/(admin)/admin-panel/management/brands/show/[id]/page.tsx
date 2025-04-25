import Show from "@/components/admin/brands/Show";


export default async function ShowBrandPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  return (
    <section className="shadow-md p-5 bg-white border border-gray-300 dark:bg-gray-800 dark:border-none rounded">
      <div className="flex flex-col space-y-6">
        <h1 className="text-xl text-center">اطلاعات برند</h1>
        {/* Show Brand Table */}
        <Show id={id} />
      </div>
    </section>
  );
}
