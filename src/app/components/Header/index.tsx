"use client";

import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/configs/gsap.config";
import Navbar from "./Navbar";
import Image from "next/image";
import PatternImage3 from "@/assets/images/patterns/bg-3.jpg";
import Link from "next/link";
import PatternImage2 from "@/assets/images/patterns/bg-2.jpg";
import HeaderImage3d from "@/assets/images/header-3d.png";
import Heading from "@/components/shared/Heading";
import PatternImage1 from "@/assets/images/patterns/bg-1.jpg";
import LogoImage from "@/assets/images/logo.png";

const Header = () => {
    useGSAP(() => {
        gsap.timeline()
            .fromTo("#container-right", {
                y: -150,
                opacity: 0,
                ease: "power3.out"
            }, {
                y: 0,
                opacity: 1,
                ease: "power3.out"
            })
            .fromTo("#image-1", {
                scale: 2,
                opacity: 0,
                ease: "power3.out"
            }, {
                scale: 1.25,
                opacity: 1,
                ease: "power3.out"
            })
            .fromTo("#container-left", {
                y: 150,
                opacity: 0,
                ease: "power3.out"
            }, {
                y: 0,
                opacity: 1,
                ease: "power3.out"
            })
            .fromTo("#image-2", {
                scale: 2,
                opacity: 0,
                ease: "power3.out"
            }, {
                scale: 1.15,
                opacity: 1,
                ease: "power3.out"
            })
            .fromTo("#image-3", {
                    scale: 2,
                    opacity: 0,
                    ease: "power3.out"
                }, {
                    scale: 1.15,
                    opacity: 1,
                    ease: "power3.out"
                }, "<"
            );

        const animation2 = gsap.fromTo("#image-1,#image-2,#image-3", {
            y: 15
        }, {
            y: -15
        });

        ScrollTrigger.create({
            trigger: "#container",
            start: "top top",
            scrub: true,
            // pin: true,
            animation: animation2
        });
    });

    return (
        <header className="flex justify-center gap-32 md:mb-32 w-full container">

            {/*<div className="absolute inset-0 z-[0]">*/}
            {/*    <Background />*/}
            {/*</div>*/}

            <div className="flex max-md:flex-col-reverse justify-center max-xs:gap-16 md:gap-16 lg:gap-32 w-full container">
                <Navbar />
                <div id="container"
                     className="grid grid-cols-2 flex-1 translate-y-[-280px] 2xs:translate-y-[-320px] md:translate-y-[-200px]">
                    {/* Left section */}
                    <div id="container-left" className="flex flex-col">
                        <div
                            className="bg-transparent h-[250px] 2xs:h-[300px] xs:h-[400px] md:h-[290px] lg:h-[350px]"></div>
                        <div className="relative">
                            <div
                                className="overflow-hidden  rounded-tl-[40px]  xs:rounded-tl-[65px] bg-[#70818b]  rounded-br-[40px]  xs:rounded-br-[65px] h-[250px] 2xs:h-[300px] xs:h-[400px] md:h-[290px] lg:h-[350px] z-10 relative border-b-[12px] border-[6px] border-background">
                                <Image id="image-2" src={PatternImage3} alt="pattern-1" className="object-cover" fill />
                                <video className="object-cover absolute w-full h-full" autoPlay muted loop>
                                    <source src="/videos/header-box.mp4" type="video/mp4" />
                                </video>
                                {/*<Link href="#"*/}
                                {/*      className="effect-click size-[40px] xs:size-[50px] inline-flex justify-center items-center rounded-full bg-white absolute left-6 top-6">*/}
                                {/*    <i className="fa-light fa-arrow-up-right text-black text-[1rem] xs:text-[1.2rem]"></i>*/}
                                {/*</Link>*/}
                            </div>
                            <div
                                className="bg-[#06121E]  rounded-tl-[40px]  xs:rounded-tl-[65px]  rounded-br-[40px]  xs:rounded-br-[65px] h-[250px] 2xs:h-[300px] xs:h-[400px] md:h-[290px] lg:h-[350px] -translate-y-[65%] absolute w-full border-[6px] border-background p-3 xs:p-4 flex flex-col gap-2 justify-end">
                                <span className="block size-1 xs:size-2 rounded-full bg-white"></span>
                                <span className="text-zinc-300 text-[0.6rem] xs:text-[0.8rem]">
                                    BUILD YOUR <br />
                                    BUSINESS<br />
                                    LOOK
                                </span>
                            </div>
                        </div>
                        <div
                            className="translate-y-[35%] bg-[#06121e]  rounded-tr-[40px]  xs:rounded-tr-[65px]  rounded-bl-[40px]  xs:rounded-bl-[65px] h-[250px] 2xs:h-[300px] xs:h-[400px] md:h-[290px] lg:h-[350px] z-10 relative border-b-[12px] border-[6px] border-background overflow-hidden">
                            <Image id="image-3" src={PatternImage2} alt="pattern-1"
                                   className="brightness-[70%] object-cover" fill />
                        </div>
                    </div>

                    {/* Right section */}
                    <div id="container-right" className="flex flex-col">
                        <div
                            className="md:bg-white  rounded-tl-[40px]  xs:rounded-tl-[65px]  rounded-br-[40px]  xs:rounded-br-[65px] h-[250px] 2xs:h-[300px] xs:h-[400px] md:h-[290px] lg:h-[350px] border-[6px] border-background">
                        </div>
                        <div className="relative">
                            <div
                                className="bg-primary rounded-tr-[40px] xs:rounded-tr-[65px] h-[250px] 2xs:h-[300px] pt-7 2xs:pt-10 flex items-center flex-col gap-2 xs:h-[400px] md:h-[290px] lg:h-[350px] border-[6px] border-background">
                                {/* <Image src={LogoImage} alt="logo" className="w-[55px] xs:w-[70px]" /> */}
                                {/* <span className="text-center max-2xs:text-[0.8rem]">Byond the limits</span> */}
                            </div>
                            <div>
                                <div
                                    className="w-full aspect-square rounded-full bg-white border-[6px] border-background -translate-y-[60%] absolute z-10">
                                    <div className="size-full border-2 border-black rounded-full relative">
                                        <div
                                            className="absolute bg-black w-[2px] h-[100px] bottom-0 flex justify-center translate-y-full left-1/2 -translate-x-1/2">
                                            <div className="size-[8px] rounded-full bg-black absolute bottom-0"></div>
                                            <div
                                                className="text-[0.8rem] min-w-[200px] text-center translate-y-[calc(100%_+_18px)] font-medium">
                                                Complete As
                                                <br />
                                                Designer / Media
                                            </div>
                                        </div>
                                        <div
                                            className="size-full bg-white border-[12px] border-background rounded-full">
                                            <Image src={HeaderImage3d} alt="header-3d"
                                                   id="image-1"
                                                   className="scale-125 drop-shadow-xl" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="w-full aspect-square rounded-t-full bg-background -translate-y-[calc(60%_+_6px)] border-background absolute">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-screen flex justify-center flex-col relative z-20 max-md:mt-[120px]">
                    <Heading>
                        <span className="bg-gradient-to-r from-primary to-green-300 from-30% text-gradient brightness-[0.95]">BYETO</span>
                        <br />
                        WHERE PIXELS <br />
                        MEET CODE
                    </Heading>
                    <div className="flex gap-3 mt-10 flex-wrap">
                        <Link href="#"
                              className="text-white px-8 inline-flex justify-center items-center h-[35px] xs:h-[42px] rounded-full bg-black">
                            Contact now
                        </Link>
                        <Link href="#"
                              className="text-white size-[35px] xs:size-[42px] inline-flex justify-center items-center rounded-full bg-black">
                            <i className="fa-light fa-arrow-up-right"></i>
                        </Link>
                        <div className="h-[35px] xs:h-[42px] px-16 rounded-full bg-zinc-400 relative overflow-hidden">
                            <Image src={PatternImage1} alt="pattern-1" className="object-cover" fill />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;