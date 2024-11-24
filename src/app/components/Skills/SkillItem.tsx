"use client"

import Paragraph, { ParagraphSizes } from "@/components/shared/Paragraph";
import Atropos from 'atropos/react';

export type SkillItemProps = {
    title: string;
    children: string;
    icon: string;
}

const SkillItem = ({ children, title, icon }: SkillItemProps) => {
    return (
        <Atropos rotateXMax={10} rotateYMax={10} duration={400} rotateTouch={false} rotateClassName="rounded-[20px] overflow-hidden">
            <div className="bg-gray-800 flex flex-col gap-3 rounded-[20px] p-6 h-full">
                <i className={`text-[2.7rem] sm:text-[3rem] fa-duotone ${icon}`}></i>
                <span className="text-white font-semibold text-[1.25rem] md:text-[1.5rem] mt-2 sm:mt-4">
                {title}
            </span>
                <Paragraph variant="gray" className="text-gray-300 leading-[1.8]" size={ParagraphSizes.lg}>
                    {children}
                </Paragraph>
            </div>
        </Atropos>
    );
};

export default SkillItem;