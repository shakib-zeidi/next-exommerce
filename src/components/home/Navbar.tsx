import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="shadow-md flex items-center justify-between py-5 px-3">
      <section>
        <Link href="/" className="text-lg md:text-2xl">صفحه اصلی</Link> 
      </section>

      <section>
        <Link href="/auth/login" className="text-indigo-500 hover:underline">ورود</Link>
        <span className="text-indigo-500"> / </span>
        <Link href="/auth/register" className="text-indigo-500 hover:underline">ثبت نام</Link>
      </section>
    </nav>
  );
}
