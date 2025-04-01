import Container from "@/components/admin/Container";
import Link from "next/link";

export default function IndexUsers() {
  return (
    <Container>
      <section className="m-5">
        <div className="flex justify-between">
          <h1 className="text-xl">لیست کاربران</h1>

          <Link
            href="/admin-panel/management/users/create"
            className="bg-indigo-500 text-white px-4 py-1 rounded"
          >
            ایجاد کاربر
          </Link>
        </div>
      </section>
    </Container>
  );
}
