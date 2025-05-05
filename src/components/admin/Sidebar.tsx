"use client";

import { FolderOpen, Gauge, MessageSquare, NotebookPen, Settings, StickyNote, Store, Users } from "lucide-react";
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
  const shopMenuItems = [
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

  const postMenuItems = [
    {
      id: 1,
      name: "همه نوشته ها",
      link: "/admin-panel/management/posts",
    },
    {
      id: 2,
      name: "افزودن نوشته",
      link: "/admin-panel/management/posts/create",
    },
    {
      id: 3,
      name: "دسته ها",
      link: "/admin-panel/management/posts/categories",
    },
    {
      id: 4,
      name: "برچسب ها",
      link: "/admin-panel/management/posts/tags",
    },
  ];

  const mediaMenuItems = [
    {
      id: 1,
      name: "کتابخانه",
      link: "/admin-panel/management/library",
    },
    {
      id: 2,
      name: "افزودن پرونده رسانه ای",
      link: "/admin-panel/management/library/create",
    },
  ];

  const pagesMenuItems = [
    {
      id: 1,
      name: "همه برگه ها",
      link: "/admin-panel/management/pages",
    },
    {
      id: 2,
      name: "افزودن برگه جدید",
      link: "/admin-panel/management/library/pages/create",
    },
  ];

  return (
    <aside
      ref={sidebarRef}
      className={`bg-white dark:bg-slate-800 dark:text-white shadow-md w-64 h-full fixed top-20 right-0 p-5 transition duration-300 z-40 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } lg:translate-x-0`}
    >
      <ul className="space-y-3 *:hover:bg-slate-300 dark:*:hover:text-black *:p-1 *:rounded *:cursor-pointer">
        <li>
          <Link href="/admin-panel/dashboard" className="flex gap-2 items-center">
            <Gauge size={15} />
            پیشخوان
          </Link>
        </li>

        <li>
          <DropDwon btnName="نوشته ها" subMenu={postMenuItems} icon={<NotebookPen size={15} />} />
        </li>

        <li>
          <DropDwon btnName="رسانه" subMenu={mediaMenuItems} icon={<FolderOpen size={15} />} />
        </li>

        <li>
          <DropDwon btnName="برگه ها" subMenu={pagesMenuItems} icon={<StickyNote size={15} />} />
        </li>

        <li>
          <Link href="/admin-panel/management/comments" className="flex gap-2 items-center">
            <MessageSquare size={15} />
            دیدگاه ها
          </Link>
        </li>

        <li>
          <DropDwon btnName="فروشگاه" subMenu={shopMenuItems} icon={<Store size={15} />} />
        </li>

        <li>
          <Link href="/admin-panel/management/users" className="flex gap-2 items-center">
            <Users size={15} />
            کاربران
          </Link>
        </li>

        <li>
          <Link href="/admin-panel/dashboard/settings" className="flex gap-2 items-center">
            <Settings size={15} />
            تنظیمات
          </Link>
        </li>
      </ul>
    </aside>
  );
}
