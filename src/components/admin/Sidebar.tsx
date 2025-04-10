import Link from "next/link";
import { RefObject } from "react";

export default function Sidebar({
  isSidebarOpen,
  sidebarRef,
}: {
  isSidebarOpen: boolean;
  sidebarRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <aside
      ref={sidebarRef}
      className={`bg-white dark:bg-slate-800 dark:text-white shadow-md w-56 h-full fixed top-20 right-0 p-5 transition duration-300 z-40 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } lg:translate-x-0`}
    >
      <ul className="space-y-3 *:hover:bg-slate-300 dark:*:hover:text-black *:p-1 *:rounded">
        <li>
          <Link href="/admin-panel/dashboard">داشبورد</Link>
        </li>
        <li>
          <Link href="/admin-panel/management/users">مدیریت کاربران</Link>
        </li>
      </ul>
    </aside>
  );
}
