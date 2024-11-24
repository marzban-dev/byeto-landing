"use client";

import Profile from "@/app/components/About/Profile";
import { useState } from "react";
import classNames from "classnames";
import Heading, { HeadingSizes } from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import ProfileImage1 from "@/assets/images/profile-parsa.jpg";
import ProfileImage2 from "@/assets/images/profile-alireza.jpg";
import ProfileImage3 from "@/assets/images/profile-shirazi.jpg";
import ProfileImage4 from "@/assets/images/profile-mamalizz.jpg";
import ProfileImage5 from "@/assets/images/profile-mansour.jpg";
import Link from "next/link";

const About = () => {
    const [isHovered, setIsHovered] = useState(false);

    const classes = classNames({
        "lg:max-w-[320px] min-[1200px]:max-w-[450px] lg:absolute left-0 transition-all duration-300": 1,
        "lg:opacity-0": isHovered
    });

    return (
        <section className="container pb-20 pt-44 md:pt-60 md:pb-44 mt-20 min-h-screen flex items-center" id="about">
            <div className="flex max-lg:flex-col justify-between relative max-lg:gap-10 w-full">
                <div className={classes}>
                    <Heading className="!whitespace-nowrap">
                        Behind Byeto
                    </Heading>
                    <Paragraph className="text-justify mt-6" variant="black">
                        At Byeto, were more than just a team – were a collective of passionate innovators,
                        programmers, and designers dedicated to pushing the boundaries of digital creativity. Get to
                        know the faces behind the code and the stories that drive our commitment to excellence.
                    </Paragraph>
                    <div className="mt-10">
                        <Heading className="!whitespace-nowrap" size={HeadingSizes.sm}>
                            Wanna connect with us?
                        </Heading>
                        <Paragraph className="text-justify mt-4" variant="black">
                            At Byeto, we&apos;re more than just a team – we&apos;re a collective the boundaries of digital
                            creativity. Get to
                            know the faces behind the code and the stories
                        </Paragraph>
                        <div className="flex gap-4 items-center mt-8">
                            <Link href="#"
                                  className="text-white px-8 inline-flex justify-center items-center h-[35px] xs:h-[42px] max-xs:text-[0.85rem] rounded-full bg-black">
                                Contact now
                            </Link>
                            <Link href="#"
                                  className="text-white size-[35px] xs:size-[42px] inline-flex justify-center items-center rounded-full bg-black">
                                <i className="fa-light fa-arrow-up-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-1 grid grid-cols-1 2xs:grid-cols-2 sm:flex gap-6 justify-end">
                    <Profile
                        name="Parsa Nazer"
                        image={ProfileImage1}
                        job="Backend Developer"
                        // skills={[
                        //     { title: "Python", icon: "devicon-python-plain " },
                        //     { title: "Django", icon: "devicon-django-plain" },
                        //     { title: "Postgres SQL", icon: "devicon-postgresql-plain" },
                        //     { title: "Photoshop", icon: "devicon-photoshop-plain" },
                        //     { title: "My SQL", icon: "devicon-mysql-plain" }
                        // ]}
                        setIsHovered={setIsHovered}
                    />
                    <Profile
                        name="Alireza Derakhshan"
                        image={ProfileImage2}
                        job="Seo Master"
                        // skills={[
                        //     { title: "Figma", icon: "devicon-figma-plain" },
                        //     { title: "Seo", icon: "devicon-google-plain" },
                        //     { title: "Photoshop", icon: "devicon-photoshop-plain" },
                        //     { title: "Wordpress", icon: "devicon-wordpress-plain" },
                        //     { title: "React", icon: "devicon-react-plain" },
                        // ]}
                        setIsHovered={setIsHovered}
                    />
                    <Profile
                        name="Amirhossein Shirazi"
                        image={ProfileImage3}
                        job="Backend Developer"
                        // skills={[
                        //     { title: "Python", icon: "devicon-python-plain " },
                        //     { title: "Django", icon: "devicon-django-plain" },
                        //     { title: "Postgres SQL", icon: "devicon-postgresql-plain" },
                        //     { title: "My SQL", icon: "devicon-mysql-plain" }
                        // ]}
                        setIsHovered={setIsHovered}
                    />
                    <Profile
                        name="Mansour Marzban"
                        image={ProfileImage5}
                        job="Frontend Developer"
                        // skills={[
                        //     { title: "React", icon: "devicon-react-plain" },
                        //     { title: "NextJs", icon: "devicon-nextjs-plain" },
                        //     { title: "Figma", icon: "devicon-figma-plain" }
                        // ]}
                        setIsHovered={setIsHovered}
                    />
                    <Profile
                        name="Mohammad Ghorbani"
                        image={ProfileImage4}
                        job="Frontend Developer"
                        // skills={[
                        //     { title: "VueJs", icon: "devicon-vuejs-plain" },
                        //     { title: "NuxtJs", icon: "devicon-nuxtjs-plain" },
                        //     { title: "Figma", icon: "devicon-figma-plain" }
                        // ]}
                        setIsHovered={setIsHovered}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;