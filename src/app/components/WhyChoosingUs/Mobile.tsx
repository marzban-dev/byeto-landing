"use client";

import Atropos from "atropos/react";
import MobileBg from "@/assets/images/mobile-bg.jpg";
import Image from "next/image";
import Message from "@/app/components/WhyChoosingUs/Message";
import AvatarImage from "@/assets/images/logo.png";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/configs/gsap.config";
import SideImages from "@/app/components/WhyChoosingUs/SideImages";
import SideOrbs from "./SideOrbs";

const Mobile = () => {
    const rightMessagesOptions = {
        x: 80,
        rotateY: -45,
        opacity: 0,
        ease: "power3.out",
    };

    const sideImagesEnterFromOptions = {
        top: '200%',
        opacity: 0,
        duration: 0.8,
        ease: "power3.inOut"
    };

    const sideImagesEnterToOptions = {
        opacity: 1,
        top: 0,
        duration: 0.8,
        ease: "power3.out"
    };

    const sideImagesLeaveOptions = {
        opacity: 0,
        y: '-200%',
        duration: 0.8,
        ease: "power3.out"
    };

    useGSAP(() => {
        const animation = gsap.timeline()
            .to('#message-box-float', {
                opacity: 1
            })
            .from("#message-box-text-float", {
                opacity: 0,
                text: "",
                duration: 2,
                ease: "none"
            })
            .from("#message-box-text-float", {
                fontSize: 60,
                delay : 1,
            })
            .fromTo("#message-box-float", {
                opacity: 1,
                y: 0,
                ease: "power3.out",
            }, {
                fontSize: 20,
                opacity: 0,
                y: -100,
                ease: "power3.inOut"
            }, "<")
            .fromTo("#atropos-mobile-container", {
                rotateX: 25,
            }, {
                opacity: 1,
                rotateX: 0,
                ease: "power3.out"
            })
            .from("#message-box-1", {
                x: -80,
                rotateY: 45,
                opacity: 0,
                ease: "power3.out"
            })
            .to('#side-orb-container, #side-image-container', {opacity: 1}, '<')
            // .to(".atropos-container", {
            //     "--mobile-gradient-color": "hsla(164,48%,70%,0.2)",
            //     ease: "power3.out"
            // }, "<")
            .from("#message-box-2", rightMessagesOptions)
            .to('.side-orbs', {backgroundColor: '#8ed7c4'}, '<')
            .fromTo("#side-image-security", sideImagesEnterFromOptions, sideImagesEnterToOptions, "<")
            .from("#message-box-3", rightMessagesOptions)
            .to('.side-orbs', {backgroundColor: '#00ffff70'})
            .to("#side-image-security", sideImagesLeaveOptions, "<")
            .fromTo("#side-image-success", sideImagesEnterFromOptions, sideImagesEnterToOptions, "<")
            .from("#message-box-4", rightMessagesOptions)
            .to('.side-orbs', {backgroundColor: '#f327e270'})
            .to("#side-image-success", sideImagesLeaveOptions, "<")
            .fromTo("#side-image-modern", sideImagesEnterFromOptions, sideImagesEnterToOptions, "<")
            .from("#message-box-5", rightMessagesOptions)
            .to('.side-orbs', {backgroundColor: '#c8ec2790'})
            .to("#side-image-modern", sideImagesLeaveOptions, "<")
            .fromTo("#side-image-speed", sideImagesEnterFromOptions, sideImagesEnterToOptions, "<")
            .from("#message-box-6", rightMessagesOptions)
            .to('.side-orbs', {backgroundColor: '#8ed7c460'})
            .to("#side-image-speed", sideImagesLeaveOptions, "<")
            .fromTo("#side-image-design", sideImagesEnterFromOptions, sideImagesEnterToOptions, "<");

        ScrollTrigger.create({
            trigger: "#mobile-container",
            start: "center center",
            pin: true,
            animation: animation
        });
    });

    return (
        <div className="w-full flex justify-center items-center [perspective:1000px] relative h-[100svh]" id="mobile-container">
            <SideImages />
            <SideOrbs />
            <Message className="absolute z-10" textClassName="!px-10 py-6 !rounded-t-[35px] !rounded-r-[35px]"
                     id="float" style={{opacity: 0}}>
                Lorem ipsum dolor sit amet ?
            </Message>
            <Atropos
                id="atropos-mobile-container"
                highlight={false}
                rotateXMax={3}
                rotateYMax={3}
                duration={400}
                shadow={false}
                rotateTouch={false}
                className="w-fit rounded-[2.5rem] origin-bottom"
                rotateClassName="atropos-container rounded-[2.5rem] w-full shadow-[0px_80px_200px_-1px] transition-all shadow-primary/10"
                innerClassName="rounded-[2.5rem]"
                style={{opacity: 0}}
            >
                <div
                    className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                    <div
                        className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                        <div className="w-full h-full relative">
                            <Image src={MobileBg} alt="mobile-chat-background" className="object-cover" fill />
                            <div className="flex-col flex z-20 relative gap-5 px-3 py-8">
                                <Message id={1} avatar={AvatarImage}>
                                    Lorem ipsum dolor sit amet ?
                                </Message>
                                <Message id={2} avatar={AvatarImage} reverse>
                                    Fast and performance
                                </Message>
                                <Message id={3} avatar={AvatarImage} reverse>
                                    Security and privacy
                                </Message>
                                <Message id={4} avatar={AvatarImage} reverse>
                                    Security and privacy
                                </Message>
                                <Message id={5} avatar={AvatarImage} reverse>
                                    Fast and performance
                                </Message>
                                <Message id={6} avatar={AvatarImage} reverse>
                                    Security and privacy
                                </Message>
                                <div className="bg-white">
                                    Typing...
                                </div>
                            </div>
                        </div>
                        {/*<img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"*/}
                        {/*     className="dark:hidden w-[272px] h-[572px]" alt="" />*/}
                        {/*<img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-dark.png"*/}
                        {/*     className="hidden dark:block w-[272px] h-[572px]" alt="" />*/}
                    </div>
                </div>
            </Atropos>
        </div>
    );
};

export default Mobile;