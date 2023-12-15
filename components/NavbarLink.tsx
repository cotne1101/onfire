"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
type NavbarLinkProps = {
  label: string;
  href: string;
};

export default function NavbarLink({ label, href }: NavbarLinkProps) {
  const currentRoute = usePathname();

  return (
    <Link href={href} className={currentRoute == href ? "underline" : ""}>
      {label}
    </Link>
  );
}
