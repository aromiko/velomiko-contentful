"use client";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Gears",
    href: "/gears",
  },
];

const HeaderNavlinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={cn(buttonVariants({ variant: "link" }), {
              ["active font-extrabold"]: pathname === link.href,
            })}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNavlinks;
