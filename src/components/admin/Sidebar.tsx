import Link from "next/link";

export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  return (
    <aside
      className={`bg-white dark:bg-slate-800 dark:text-white shadow-md w-56 h-full fixed z-40 p-5 transition duration-300 ${
        isSidebarOpen ? "translate-x-full" : "translate-x-0"
      }`}
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
