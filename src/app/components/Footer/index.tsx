import Button from "@/components/shared/Button";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black relative w-full h-[450px] px-5 overflow-x-hidden lg:px-10 sm:h-[500px] flex flex-col justify-between border-t border-primary/30">
            <div className="absolute bg-gradient-header w-full h-full z-10 opacity-80"></div>
            <div className="flex flex-col gap-12 sm:gap-20 mt-[80px]">
                <div className="flex flex-col gap-2 items-center z-20 relative">
                    <span className="text-gray-300">Stay Connected with Byeto</span>
                    <span className="text-[1.25rem] xs:text-[1.5rem] sm:text-[2rem] text-slate-100 font-semibold text-center px-6">Keep up-to-date, follow us on social media</span>
                    <Button className="mt-5">
                        Need help?
                    </Button>
                </div>
                <div className="flex justify-center items-center gap-5 sm:gap-10 relative z-10">
                    <Link href="#" className="hover:scale-[1.15] hover:text-white text-slate-400 p-2 transition-all">
                        <i className="fa-brands fa-twitter text-[1.5rem] sm:text-[2rem]"></i>
                    </Link>
                    <Link href="#" className="hover:scale-[1.15] hover:text-white text-slate-400 p-2 transition-all">
                        <i className="fa-brands fa-instagram text-[1.5rem] sm:text-[2rem]"></i>
                    </Link>
                    <Link href="#" className="hover:scale-[1.15] hover:text-white text-slate-400 p-2 transition-all">
                        <i className="fa-brands fa-telegram text-[1.5rem] sm:text-[2rem]"></i>
                    </Link>
                    <Link href="#" className="hover:scale-[1.15] hover:text-white text-slate-400 p-2 transition-all">
                        <i className="fa-brands fa-linkedin text-[1.5rem] sm:text-[2rem]"></i>
                    </Link>
                    <Link href="#" className="hover:scale-[1.15] hover:text-white text-slate-400 p-2 transition-all">
                        <i className="fa-brands fa-google text-[1.5rem] sm:text-[2rem]"></i>
                    </Link>
                </div>
            </div>
            <div className="border-t border-slate-800">
                <div className="w-full text-gray-500 flex flex-wrap gap-2 xs:gap-4 justify-between items-center container py-6 text-[0.8rem] sm:text-[1rem]">
                <span>
                    @2024 Byeto all right reserved
                </span>
                {/*<span>*/}
                {/*    lorem ipsum dolor site atemp dick*/}
                {/*</span>*/}
                </div>
            </div>
        </footer>
    );
};

export default Footer;