"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiFire } from "react-icons/hi";
import NavbarLink from "./NavbarLink";
import { useState } from "react";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
  const [isHidden, setIsHidden] = useState(true);
  return (
    // custom drpout
    <div className="bg-primary py-4 px-5 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">
        OnFire <HiFire className="inline" />
      </Link>
      <div className="flex items-center gap-3 font-medium">
        <div className="hidden md:flex items-center gap-3">
          <NavbarLink label="News" href="/news" />
          <NavbarLink label="Map" href="/map" />
        </div>

        {/* and button for more */}
        <div className="relative">
          <button
            onClick={() => {
              setIsHidden(!isHidden);
            }}
            className="px-3 py-2 border border-black"
          >
            More
          </button>
          {/* dropdown here */}
          <div
            className={
              "absolute shadow-lg z-50 top-12 right-0 bg-primary p-5 " +
              (isHidden ? "hidden" : "block")
            }
          >
            <div className="flex flex-col gap-3">
              {/* when small screen should be show */}
              <div className="flex flex-col gap-3 md:hidden">
                <Link
                  href="/profile"
                  className="flex items-center gap-3 border border-black px-3 py-2 rouned-full"
                >
                  <span className="font-semibold">Username</span>
                  <img
                    src="https://avatars.githubusercontent.com/u/63842327?v=4"
                    alt="user"
                    className="rounded-full w-8 h-8"
                  />
                </Link>
                <NavbarLink label="News" href="/news" />
                <NavbarLink label="Map" href="/map" />
              </div>
              <NavbarLink label="Quiz" href="/quiz" />
              <NavbarLink label="Mentoring/Selfstudy" href="/mentoring" />
              <NavbarLink label="Shopping" href="/shopping" />
              <NavbarLink label="Forum" href="/forum" />
              <NavbarLink label="Partners" href="/partners" />
            </div>
          </div>
        </div>
        {/* user info */}
        <Link
          href="/profile"
          className="hidden md:flex items-center gap-3 border border-black px-3 py-2 rouned-full"
        >
          <span className="font-semibold">Username</span>
          <img
            src="https://avatars.githubusercontent.com/u/63842327?v=4"
            alt="user"
            className="rounded-full w-8 h-8"
          />
        </Link>
      </div>
    </div>
  );
}
