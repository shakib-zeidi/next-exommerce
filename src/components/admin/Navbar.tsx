import { Bell, Mail, Menu, Settings } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { RefObject } from "react";

export default function Navbar({
  toggleSidebar,
  buttonRef,
}: {
  toggleSidebar: () => void;
  buttonRef: RefObject<HTMLButtonElement | null>;
}) {
  return (
    <div className="relative flex flex-col items-center w-full">
      <nav className="border-b border-gray-200 p-5 flex items-center justify-between md:gap-3 fixed top-0 w-full h-20 bg-white dark:bg-slate-800 dark:text-white shadow-md">
        <div className="flex gap-3">
          <Link href="/admin-panel/dashboard">
            <h1 className="text-md md:text-lg font-semibold whitespace-nowrap">پنل مدیریت</h1>
          </Link>

          <button
            ref={buttonRef}
            onClick={toggleSidebar}
            className="cursor-pointer lg:hidden"
          >
            <Menu />
          </button>
        </div>

        <div className="flex items-center gap-5 *:cursor-pointer">
          <Settings size={20} />
          <Image
            src="/admin/images/user.jpg"
            alt="user-avatar"
            width={35}
            height={35}
            className="rounded-full border-2 border-gray-500"
          />
          <Bell size={20} />
          <Mail size={20} />
        </div>
      </nav>
    </div>
  );
}
