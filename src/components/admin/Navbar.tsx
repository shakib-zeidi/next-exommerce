import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <div className="relative flex flex-col items-center w-full">
      <nav className="p-5 flex items-center justify-between md:justify-start md:gap-3 fixed top-0 w-full h-20 bg-white dark:bg-slate-800 dark:text-white shadow-md">
        <Link href="/admin-panel/dashboard">
          <h1 className="text-2xl md:text-xl font-semibold">پنل مدیریت</h1>
        </Link>
        <button onClick={toggleSidebar} className="cursor-pointer lg:hidden">
          <Menu />
        </button>
      </nav>
    </div>
  );
}
