"use client";

import { Monitor, Users } from "lucide-react";
import Link from "next/link";
import { RefObject } from "react";
import DropDwon from "./DropDown";

export default function Sidebar({
  isSidebarOpen,
  sidebarRef,
}: {
  isSidebarOpen: boolean;
  sidebarRef: RefObject<HTMLDivElement | null>;
}) {
  const submenuItems = [
    {
      id: 1,
      name: "تگ ها",
      link: "/admin-panel/management/tags",
    },
    {
      id: 2,
      name: "برندها",
      link: "/admin-panel/management/brands",
    },
    {
      id: 3,
      name: "دسته بندی ها",
      link: "/admin-panel/management/categories",
    },
    {
      id: 4,
      name: "ویژگی ها",
      link: "/admin-panel/management/attributes",
    },
    {
      id: 5,
      name: "محصولات",
      link: "/admin-panel/management/products",
    },
    {
      id: 6,
      name: "سفارش ها",
      link: "/admin-panel/management/orders",
    },
    {
      id: 7,
      name: "نظرات",
      link: "/admin-panel/management/comments",
    },
  ];

  return (
    <aside
      ref={sidebarRef}
      className={`bg-white dark:bg-slate-800 dark:text-white shadow-md w-56 h-full fixed top-20 right-0 p-5 transition duration-300 z-40 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } lg:translate-x-0`}
    >
      <ul className="space-y-3 *:hover:bg-slate-300 dark:*:hover:text-black *:p-1 *:rounded *:cursor-pointer">
        <li>
          <Link href="/admin-panel/dashboard" className="flex gap-2 items-center">
            <Monitor size={15} />
            داشبورد
          </Link>
        </li>

        <li>
          <Link href="/admin-panel/management/users" className="flex gap-2 items-center">
            <Users size={15} />
            کاربران
          </Link>
        </li>

        <li>
          <DropDwon btnName="فروشگاه" subMenu={submenuItems} />
        </li>
      </ul>
    </aside>
  );
}
