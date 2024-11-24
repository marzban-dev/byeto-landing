import Image from "next/image";
import LogoImage from "@/assets/images/logo.png";
import Link from "next/link";

type LogoProps = {
    className?: string;
}

const Logo = ({ className }: LogoProps) => {
    return (
        <Link href="/public">
            <Image src={LogoImage} alt="logo" className={`size-[25px] xs:size-[35px] ${className}`} />
        </Link>
    );
};

export default Logo;