import Register from "@/components/home/auth/Register";

export default function RegisterPage() {
  return (
    <section>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            ساخت حساب کاربری
          </h2>
        </div>

        <Register />
      </div>
    </section>
  );
}
