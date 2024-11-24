"use client";

import Image, { StaticImageData } from "next/image";
import Paragraph from "@/components/shared/Paragraph";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/configs/gsap.config";

export type ProgressStepProps = {
    id: string;
    reverse?: boolean;
    title: string;
    children: string;
    image: StaticImageData;
    icon: string;
}

const ProgressStep = ({ reverse, image, title, children: description, id, icon }: ProgressStepProps) => {
    useGSAP(() => {
        const animation = gsap.timeline()
            .fromTo(`#progress-image-${id}`, {
                y: 25,
                x: reverse ? 100 : -100,
                rotateY: reverse ? -25 : 25,
                opacity: 0
            }, {
                y: 0,
                x: 0,
                rotateY: 0,
                opacity: 1
            }).fromTo(`#progress-text-${id}`, {
                y: 25,
                x: reverse ? -100 : 100,
                rotateY: reverse ? 25 : -25,
                opacity: 0
            }, {
                y: 0,
                x: 0,
                rotateY: 0,
                opacity: 1
            }, "<");
        // .fromTo(`#number-${id}`, {
        //     rotateX: 25,
        //     scale : 0.5,
        //     opacity: 0
        // }, {
        //     rotateX: 0,
        //     scale : 1,
        //     opacity: 1
        // }, "<");

        ScrollTrigger.create({
            trigger: `#progress-container-${id}`,
            end: '150% bottom',
            scrub: true,
            // pin: true,
            animation: animation
        });
    });

    return (
        <div id={`progress-container-${id}`}
             className={`max-lg:flex-col flex justify-center items-center gap-10 xl:gap-20 z-20 ${reverse && "flex-row-reverse"}`}>
            <div className="[perspective:1000px]">
                <div id={`progress-image-${id}`}
                     className="w-[290px] 2xs:w-[320px] xl:w-[400px] h-[180px] xl:h-[200px] rounded-[20px] relative bg-gray-900">
                    <Image src={image} alt={title} fill className="object-contain rounded-[20px] brightness-[1.1] scale-[120%]" />
                </div>
            </div>
            <div
                id={`progress-number-${id}`}
                className="flex justify-center items-center size-[50px] rounded-full bg-gradient-to-br from-primary to-black text-white">
                {id}
            </div>
            <div className="[perspective:1000px]">
                <div className="max-w-[290px] 2xs:max-w-[320px] max-lg:flex flex-col items-center xl:max-w-[400px]"
                     id={`progress-text-${id}`}>
                    <div className="text-white font-semibold text-[1.25rem] flex items-center gap-3">
                        <i className={`fa-light ${icon}`}></i>
                        <span>{title}</span>
                    </div>
                    <Paragraph variant="gray" className="mt-4 leading-[1.8] max-lg:text-center">
                        {description}
                    </Paragraph>
                </div>
            </div>
        </div>
    );
};

export default ProgressStep;