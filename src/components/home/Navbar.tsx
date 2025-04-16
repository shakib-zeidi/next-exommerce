"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <>
      <nav className="shadow flex items-center justify-between p-5">
        <h1 className="text-xl font-semibold">لوگو</h1>

        <Menu size={25} onClick={() => setOpenMenu((prev) => !prev)} className="md:hidden" />

        <ul className="*:hover:underline *:hover:text-indigo-500 font-semibold hidden md:flex md:items-center md:gap-4">
          <li>
            <Link href="/">صفحه اصلی</Link>
          </li>

          <li>
            <Link href="/shop">فروشگاه</Link>
          </li>

          <li>
            <Link href="/about-us">دباره ما</Link>
          </li>

          <li>
            <Link href="/contact-us">تماس با ما</Link>
          </li>

          <li>
            <Link href="/support">پشتیبانی</Link>
          </li>
        </ul>

        <div className="space-x-2 hidden md:block">
          <Link href="/auth/register" className="hover:underline hover:text-indigo-500 ">ثبت نام</Link>
          <span>/</span>
          <Link href="/auth/login" className="hover:underline hover:text-indigo-500 ">ورود</Link>
        </div>
      </nav>

      <div
        className={`w-60 h-full fixed p-5 bg-white border-2 border-gray-200 border-t-none duration-200 md:hidden ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-3 *:text-indigo-600 font-semibold">
          <div className="flex justify-between">
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>

            <X size={20} onClick={() => setOpenMenu((prev) => !prev)} className="text-black" />
          </div>

          <li>
            <Link href="/shop">فروشگاه</Link>
          </li>

          <li>
            <Link href="/auth/login">ورود / ثبت نام</Link>
          </li>

          <li>
            <Link href="/about-us">دباره ما</Link>
          </li>

          <li>
            <Link href="/contact-us">تماس با ما</Link>
          </li>

          <li>
            <Link href="/support">پشتیبانی</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
