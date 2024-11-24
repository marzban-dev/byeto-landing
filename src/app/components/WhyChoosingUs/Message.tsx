"use client";

import Image, { StaticImageData } from "next/image";

export type MessageProps = {
    children?: React.ReactNode;
    reverse?: boolean;
    avatar?: StaticImageData;
    id: number | string;
    className?: string;
    textClassName?: string;
    style?: React.CSSProperties;
}

const Message = ({ children, avatar, reverse, id, className, textClassName, style }: MessageProps) => {
    return (
        <div className={`[perspective:1000px] ${className}`}>
            <div className={`flex gap-2 items-end ${reverse ? "flex-row-reverse" : ""}`} id={`message-box-${id}`} style={style}>
                {avatar && <div
                    className="size-[20px] border-[1.5px] shrink-0 border-white flex justify-center items-center rounded-full relative p-4 bg-black">
                    <Image className="size-[60%] absolute" src={avatar} alt="" />
                </div>}
                <div
                    id={`message-box-text-${id}`}
                    className={`w-fit px-3 py-2 rounded-t-[12px] ${textClassName} ${reverse ? "rounded-l-[12px] bg-gray-200" : "rounded-r-[12px] bg-primary"} text-[0.8rem]`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Message;