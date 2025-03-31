import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>User Layout</h1>
      {children}
    </div>
  );
}
