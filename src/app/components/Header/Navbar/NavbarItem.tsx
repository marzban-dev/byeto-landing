import Link from "next/link";
import React from "react";

export type NavbarItem = {
    href: string,
    children: React.ReactNode
}

const NavbarItem = ({ href, children }: NavbarItem) => {
    return (
        <li>
            <Link className="text-[1rem] text-black effect-hover-brightness" href={href}>
                {children}
            </Link>
        </li>
    );
};

export default NavbarItem;