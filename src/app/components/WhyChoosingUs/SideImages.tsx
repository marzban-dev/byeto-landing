import Image from "next/image";

import ImageSecurityLeft from "@/assets/images/why-choosing-us/security-left.png";
import ImageSecurityRight from "@/assets/images/why-choosing-us/security-right.png";
import ImageSuccessLeft from "@/assets/images/why-choosing-us/success-left.png";
import ImageSuccessRight from "@/assets/images/why-choosing-us/success-right.png";
import ImageDesignLeft from "@/assets/images/why-choosing-us/design-left.png";
import ImageDesignRight from "@/assets/images/why-choosing-us/design-right.png";
import ImageSpeedLeft from "@/assets/images/why-choosing-us/speed-left.png";
import ImageSpeedRight from "@/assets/images/why-choosing-us/speed-right.png";
import ImageModernLeft from "@/assets/images/why-choosing-us/modern-left.png";
import ImageModernRight from "@/assets/images/why-choosing-us/modern-right.png";

const SideImages = () => {
    return (
        <div id="side-image-container" className="overflow-hidden absolute inset-0 flex flex-col items-center" style={{opacity: 0}}>
            <div id="side-image-security" className="absolute inset-0 shrink-0 flex items-center justify-between px-[20%]">
                <Image src={ImageSecurityLeft} alt="security-left" className="w-[250px] absolute left-[10%]"/>
                <Image src={ImageSecurityRight} alt="security-right" className="w-[250px] absolute right-[10%]"/>
            </div>

            <div id="side-image-success" className="absolute inset-0 shrink-0 flex items-center justify-between px-[20%]">
                <Image src={ImageSuccessLeft} alt="success-left" className="w-[250px] absolute left-[10%]"/>
                <Image src={ImageSuccessRight} alt="success-right" className="w-[250px] absolute right-[10%]"/>
            </div>

            <div id="side-image-modern" className="absolute inset-0 shrink-0 flex items-center justify-between px-[20%]">
                <Image src={ImageModernRight} alt="modern-right" className="w-[250px] absolute left-[10%]"/>
                <Image src={ImageModernLeft} alt="modern-left" className="w-[250px] absolute right-[10%]"/>
            </div>

            <div id="side-image-speed" className="absolute inset-0 shrink-0 flex items-center justify-between px-[20%]">
                <Image src={ImageSpeedLeft} alt="speed-left" className="w-[250px] absolute left-[10%]"/>
                <Image src={ImageSpeedRight} alt="speed-right" className="w-[250px] absolute right-[10%]"/>
            </div>

            <div id="side-image-design" className="absolute inset-0 shrink-0 flex items-center justify-between px-[20%]">
                <Image src={ImageDesignLeft} alt="design-left" className="w-[250px] absolute left-[10%]"/>
                <Image src={ImageDesignRight} alt="design-right" className="w-[250px] absolute right-[10%]"/>
            </div>
        </div>
    );
};

export default SideImages;