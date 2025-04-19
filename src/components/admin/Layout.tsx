"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} buttonRef={buttonRef} />
      <Sidebar isSidebarOpen={isSidebarOpen} sidebarRef={sidebarRef} />

      <div className="flex flex-1">
        <main className="flex-1 p-6 lg:mr-64 overflow-hidden mt-20">
          {children}
        </main>
      </div>
    </div>
  );
}
