import Login from "@/components/home/auth/Login";

export default function LoginPage() {
  return (
    <section>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            ورود به حساب کاربری
          </h2>
        </div>

        <Login />
      </div>
    </section>
  );
}
