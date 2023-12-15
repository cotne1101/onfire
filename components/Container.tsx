"use client";

import { usePathname } from "next/navigation";

type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  const path = usePathname();
  return (
    <div className={["/shopping"].includes(path) ? "bg-[#181a1b]" : ""}>
      <main className={"p-5 max-w-5xl mx-auto "}>{children}</main>
    </div>
  );
}
