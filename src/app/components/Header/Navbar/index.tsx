import Logo from "@/components/shared/Logo";
import NavbarItem from "@/app/components/Header/Navbar/NavbarItem";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <nav className="w-full left-0 top-0 absolute z-30">
            <div className="flex justify-between pt-5 container">
                <Logo className="!size-[45px] sm:!size-[60px] invert" />
                <div className="flex gap-[20px] sm:gap-[100px] items-center">
                    <ul className="flex gap-8 max-xs:hidden">
                        <NavbarItem href="#projects">
                            Projects
                        </NavbarItem>
                        <NavbarItem href="#about">
                            About
                        </NavbarItem>
                        <NavbarItem href="#guide">
                            Guide
                        </NavbarItem>
                    </ul>
                    <div className="flex gap-4 items-center">
                        <Link className="text-[1rem] text-black" href="">
                            Connect
                        </Link>
                        <Link href=""
                              className="shrink-0 flex justify-center items-center size-[40px] xs:size-[45px] rounded-full bg-black">
                            <i className="fa-light fa-play text-[1rem] text-white"></i>
                        </Link>
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;