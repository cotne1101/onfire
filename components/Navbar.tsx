"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiFire } from "react-icons/hi";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  const currentRoute = usePathname();
  return (
    <div className="bg-primary py-4 px-5 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        OnFire <HiFire className="inline" />
      </Link>
      <div className="flex items-center gap-3 font-medium">
        <Link
          href="/news"
          className={currentRoute == "/news" ? "underline" : ""}
        >
          News
        </Link>
        <Link href="/map" className={currentRoute == "/map" ? "underline" : ""}>
          Map
        </Link>
        {/* and button for more */}
        <button className="px-3 py-2 border border-black">More</button>
        {/* user info */}
        <div className="flex items-center gap-3 border border-black px-3 py-2 rouned-full">
          <span className="font-semibold">Siddharth</span>
          <img
            src="https://avatars.githubusercontent.com/u/63842327?v=4"
            alt="user"
            className="rounded-full w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
}
