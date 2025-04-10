'use client'

import { ReactNode } from "react";
import Navbar from "./Navbar";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <NextTopLoader showSpinner={false} />
      <ToastContainer rtl={true} />
      <Navbar />
      {children}
    </div>
  );
}
