"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const MenuBtn = () => {
  const pathname = usePathname();

  if (pathname === "/translations") {
    return (
      <Link
        className="mr-2 border rounded-md p-2"
        href="/"
      >
        Translate New
      </Link>
    );
  }
  return (
    <Link
      className="mr-2 border rounded-md p-2"
      href="/translations"
    >
      My Translations
    </Link>
  );
};
