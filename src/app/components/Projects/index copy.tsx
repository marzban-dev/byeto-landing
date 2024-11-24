"use client";

import { gsap, ScrollTrigger } from "@/configs/gsap.config";
import { PROJECTS } from "@/constants";
import Image from "next/image";
import EyeGif from "@/assets/images/eye.gif";
import { useWindowSize } from "@reactuses/core";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import Intro from "@/app/components/Projects/Intro";
import { useRatio } from "@/utils/useRatio";

const Projects = () => {
    const { width: windowWidth } = useWindowSize();
    const { isMobile } = useRatio();

    useGSAP(() => {
        const slider = document.querySelector(".slider");
        const infos = gsap.utils.toArray(".project-info");
        const thumbnails = gsap.utils.toArray(".project-thumbnail");

        const getScroll = () => {
            const width = slider!.scrollWidth;
            return isMobile
                ? -(width - window.innerWidth + 20)
                : -(width - window.innerWidth);
        };

        const tl = gsap.timeline({ defaults: { duration: 3 } });

        const tween = tl.to(slider, {
            x: getScroll,
            ease: "none",
        });

        ScrollTrigger.create({
            trigger: "#projects",
            start: "top",
            end: "+=2000",
            pin: true,
            animation: tween,
            scrub: 1,
            invalidateOnRefresh: true,
        });

        infos.forEach((info: any) => {
            const title = info.querySelector(".title");
            const desc = info.querySelector(".desc");
            const techsText = info.querySelector(".techsText");
            const techs = info.querySelectorAll(".techs");
            const visitBtn = info.querySelectorAll(".visit");

            const tl1 = gsap.timeline();

            tl1.from(title, { y: -30, opacity: 0 })
                .from(desc, { text: "" })
                .from(techsText, { y: -30, opacity: 0 })
                .from(techs, { opacity: 0, y: 50, stagger: 0.05, ease: "none" })
                .from(visitBtn, { y: 30, opacity: 0 });

            ScrollTrigger.create({
                trigger: info,
                start: "-40% center",
                end: "left center",
                scrub: 1,
                animation: tl1,
                containerAnimation: tl,
            });
        });

        thumbnails.forEach((thumbnail: any) => {
            const image = thumbnail.querySelector(".image");

            const tl2 = gsap.timeline();

            tl2.to(image, { opacity: 1, y: 0 });

            ScrollTrigger.create({
                trigger: thumbnail,
                start: "left center",
                end: "center center",
                scrub: 1,
                animation: tl2,
                containerAnimation: tl,
            });
        });
    });

    return (
        <section
            id="projects"
            className="overflow-hidden bg-[#18181b] -mt-20 h-screen"
        >
            <Intro />
            <div className="w-[400vw] flex slider text-slate-100 font-bold text-2xl z-1 -mt-14 lg:-mt-0">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        style={{ width: windowWidth + "px" }}
                        className="h-[calc(100vh-180px)] page relative"
                    >
                        <div className="flex flex-col lg:flex-row items-end h-[calc(100%-14em)] w-full gap-20 my-[3em] lg:my-[7em] relative">
                            <div className="w-full lg:w-1/2 h-full flex justify-center relative items-center project-thumbnail">
                                <div className="hidden lg:block size-[20rem] absolute top-[65%] right-0 -translate-y-1/2 -translate-x-1/2 bg-primary z-[1] blur-3xl rounded-full opacity-30" />
                                <div className="hidden lg:block size-[20rem] absolute top-[45%] left-[35%] -translate-y-1/2 -translate-x-1/2 bg-cyan-400 z-[1] blur-3xl rounded-full opacity-30" />
                                <Image
                                    className="image z-[2] scale-50 lg:scale-95 size-[20rem] lg:size-[600px]"
                                    src={project.thumbnail}
                                    alt="mockup"
                                    style={{
                                        transform: "translateY(-30px)",
                                        opacity: 0,
                                    }}
                                />
                            </div>
                            <div className="w-full lg:w-1/2 h-full flex flex-col px-5 lg:px-10 justify-center gap-3 lg:gap-5 items-center project-info">
                                <p className="text-2xl lg:text-4xl title">
                                    {project.title}
                                </p>
                                <p className="text-[1rem] font-medium lg:text-lg text-gray-400 desc text-center leading-[1.4rem]">
                                    {project.description}
                                </p>

                                <p className="text-lg text-slate-100 desc text-center techsText">
                                    Techs used:
                                </p>
                                <div className="w-full flex flex-wrap mt-2 justify-center gap-4 px-3">
                                    {project.techsUsed?.map(
                                        (tech: string, index: number) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="bg-gray-950 techs text-xs text-gray-400 border border-gray-400 border-b-[3px] lg:border-b-4 font-medium overflow-hidden relative px-3 lg:px-4 py-1 lg:py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                                                >
                                                    <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                                    {tech}
                                                </div>
                                            );
                                        }
                                    )}
                                </div>

                                <div className="flex gap-3 mt-5 visit">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="text-white px-8 inline-flex gap-3 effect-click-scale transition text-sm justify-center items-center h-[42px] rounded-full bg-black/80 backdrop-blur-sm"
                                    >
                                        <span>Visit now</span>
                                        <i className="fa-light fa-arrow-up-right text-sm"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div
                    style={{ width: windowWidth + "px" }}
                    className="h-[calc(100vh-180px)] page relative bg-grid-white/10"
                >
                    <div className="absolute top-0 h-full w-[10%] left-0 bg-gradient-to-r from-[#18181b] from-[1%] to-transparent z-[1]" />
                    <div className="absolute inset-x-0 h-[10%] w-full bottom-0 bg-gradient-to-r to-[#18181b] from-[1%] from-transparent z-[1]" />

                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#18181b] [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
                    <div className="h-[calc(100%-14em)] w-full my-[7em] flex justify-center relative items-center">
                        <div className="hidden lg:block size-[18rem] absolute top-[65%] right-[48%] -translate-y-1/2 bg-primary z-[2] blur-3xl rounded-full opacity-30" />
                        <div className="hidden lg:block size-[20rem] absolute top-[45%] left-[55%] -translate-y-1/2 -translate-x-1/2 bg-cyan-400 z-[2] blur-3xl rounded-full opacity-30" />
                        <div className="flex flex-col justify-center items-center gap-4 z-[3] px-10">
                            <Image
                                className="scale-75"
                                src={EyeGif}
                                alt="gif"
                            />
                            <p className="text-slate-100 text-[.9rem] lg:text-[1.2rem] -mt-8 lg:-mt-5 text-center">
                                These were just a few Projects we have done so
                                far :)
                            </p>
                            <Link
                                href="#"
                                className="text-white py-2 px-8 gap-3 mt-5 inline-flex justify-center items-center rounded-full bg-black"
                            >
                                <span className="text-[.9rem]">See more</span>
                                <i className="fa-light fa-arrow-up-right text-sm pt-1.5"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
