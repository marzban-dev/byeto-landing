import Link from "next/link";
import Paragraph from "@/components/shared/Paragraph";
import Heading, { HeadingSizes } from "@/components/shared/Heading";
import SkillItem from "@/app/components/Skills/SkillItem";

const Skills = () => {
    return (
        <section className="pb-24 pt-20 bg-black" id="guide">
            <div className="container sm:px-10 py-8 sm:py-12 sm:rounded-[20px] min-h-[400px]">
                <div className="w-full flex gap-2">
                    <Link href="#"
                          className="effect-click-ring transition-all flex justify-center items-center border-white rounded-full border-2 size-[35px] sm:size-[40px]">
                        <i className="fa-light fa-arrow-up-right text-white text-[0.85rem] sm:text-[1rem]"></i>
                    </Link>
                    <Link href="#"
                          className="effect-click-ring transition-all flex text-white justify-center items-center border-white rounded-full border-2 max-sm:text-[0.85rem] h-[35px] sm:h-[40px] px-4">
                        Team stacks
                    </Link>
                </div>
                <div className="w-full max-lg:flex-col justify-between max-lg:gap-6 flex mt-8 sm:mt-10 lg:mt-8">
                    <Heading className="text-white font-medium" size={HeadingSizes.md}>
                        Development
                        <br />
                        Ecosystem
                    </Heading>
                    <Paragraph className="max-w-[550px] lg:text-right leading-[1.8]" variant="gray">
                        Welcome to our Digital Development Ecosystem, where creativity meets technology to craft
                        captivating digital experiences.
                    </Paragraph>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:mt-20">
                    <SkillItem title="Graphic Design" icon="fa-compass-drafting text-primary">
                        Graphic design involves creating visual content to communicate messages. It encompasses the use
                        of typography, imagery, color, and layout techniques to convey ideas effectively.
                    </SkillItem>
                    <SkillItem title="Ui & Ux Design" icon="fa-pen-nib text-primary">
                        UI (User Interface) design focuses on the look and feel of digital interfaces, aiming to make
                        them visually appealing and user-friendly. UX (User Experience) design concerns itself with the
                        overall experience users have with a product.
                    </SkillItem>
                    <SkillItem title="Web Development" icon="fa-laptop-code text-primary">
                        Web development involves building and maintaining websites and web applications. It encompasses
                        frontend development, which focuses on the visual aspects and user interaction, and backend
                        development, which deals with server-side logic and database management.
                    </SkillItem>
                    {/* hand-holding-seedling */}
                    <SkillItem title="Digital Marketing" icon="fa-bullseye-arrow text-primary">
                        Digital marketing encompasses strategies and techniques used to promote products or services
                        online. It includes a range of activities such as social media marketing, email marketing,
                        content marketing, and search engine advertising.
                    </SkillItem>
                    <SkillItem title="SEO" icon="fa-globe text-primary">
                        SEO is the practice of optimizing
                        websites to rank higher in search engine results pages (SERPs). It involves various techniques
                        such as keyword research, on-page optimization, link building, and technical optimization.
                    </SkillItem>
                    <SkillItem title="Content Creation" icon="fa-typewriter text-primary">
                        Content creation involves developing various types of content, including articles, blog posts,
                        videos, infographics, and social media posts, to engage and inform target audiences.
                    </SkillItem>
                </div>
            </div>
        </section>
    );
};

export default Skills;