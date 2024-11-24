"use client";

import { useMemo } from "react";
import Link from "next/link";

export type SectionProps = {
    title: string;
    items: {
        text: string;
        link: string;
    }[]
}

const Section = ({ items, title }: SectionProps) => {

    const renderItems = useMemo(() => {
        return items.map(item => {
            return (
                <Link key={item.text} className="text-white" href={item.link}>
                    {item.text}
                </Link>
            );
        });
    }, [items]);

    return (
        <div>
            <h3 className="text-primary text-[1.5rem] mb-4">{title}</h3>
            <div className="flex flex-col gap-4">
                {renderItems}
            </div>
        </div>
    );
};

export default Section;