import Create from "@/components/admin/users/Create";

export default function CreateUserPage() {
  return (
    <section className="shadow-md p-5 bg-white border border-gray-300 dark:bg-gray-800 dark:border-none rounded">
      <div className="flex flex-col space-y-6">
        <h1 className="text-xl text-center">ایجاد کاربر</h1>

        <div className="flex flex-col w-full">
          {/* Create User Form */}
          <Create />
        </div>
      </div>
    </section>
  );
}
