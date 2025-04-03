import Container from "@/components/admin/Container";
import Show from "@/components/admin/users/Show";

export default async function ShowUserPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;

  return (
    <Container>
      <section className="shadow-md p-5 bg-white border border-gray-300 dark:bg-gray-800 dark:border-none rounded">
        <div className="flex flex-col space-y-6">
          <h1 className="text-xl text-center">اطلاعات کاربر</h1>
          {/* Show User Table */}
          <Show id={id} />
        </div>
      </section>
    </Container>
  );
}
