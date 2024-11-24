'use client'

import { gsap } from '@/configs/gsap.config'
import { PROJECTS } from '@/constants'
import Image from 'next/image'
import EyeGif from '@/assets/images/eye.gif'
import { useWindowSize } from '@reactuses/core'
import { useGSAP } from '@gsap/react'
import Link from 'next/link'
import Intro from "@/app/components/Projects/Intro";
import { useRatio } from '@/utils/useRatio'

const Projects = () => {

    useGSAP(() => {

        const about: any = document.querySelector('#about')
        const lastCard: any = document.querySelector('.card.scroll')
        const pinnedSections = gsap.utils.toArray('.pinned')

        pinnedSections.forEach((section: any, index: number, sections: any[]) => {
            let img = section.querySelector('.img')

            let nextSection = sections[index + 1] || lastCard
            let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`

            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: index == sections.length ? `+=${lastCard.offsetHeight / 2}` : about.offsetTop - window.innerHeight,
                    pin: true,
                    pinSpacing: false,
                    scrub: true
                }
            })

            gsap.fromTo(img, {scale: 1} , {scale: 0.5, opacity: 0,
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: endScalePoint,
                    scrub: 1
                }
            })
        })

    });

    return (
        <section id="projects" className="bg-[#18181b] size-full relative overflow-hidden bg-grid-white/5">
            <Intro />

            {PROJECTS.map((project, index) => (
                <div className="w-full h-[100svh] card pinned z-10" key={index}>
                    <div className="img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-2/3 h-full">
                        <div className="size-full">
                            <div className="flex flex-col lg:flex-row items-end h-[calc(100%-14em)] w-full gap-10 lg:gap-20 my-[3em] lg:my-[7em] relative">
                                <div className='w-full lg:w-1/2 h-full flex justify-center relative items-center project-thumbnail'>  
                                    <div className='hidden lg:block size-[20rem] absolute top-[65%] right-10 -translate-y-1/2 bg-primary z-[1] blur-3xl rounded-full opacity-30' />
                                    <div className='hidden lg:block size-[20rem] absolute top-[45%] left-[35%] -translate-y-1/2 -translate-x-1/2 bg-cyan-400 z-[1] blur-3xl rounded-full opacity-30' />
                                    <Image className='z-[2] lg:scale-95 size-full lg:size-[600px] object-cover' src={project.thumbnail} alt='mockup'/>
                                </div>
                                <div className='w-full lg:w-1/2 h-full flex flex-col px-5 lg:px-10 justify-center gap-5 items-center project-info'>  
                                    <p className='text-2xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400'>{project.title}</p>
                                    <p className='text-[1rem] font-medium lg:text-lg text-gray-400 desc text-center !leading-[2rem]'>{project.description}</p>
{/* 
                                        <p className='text-lg text-slate-100 desc text-center techsText'>Techs used:</p>
                                    <div className='w-full flex flex-wrap mt-2 justify-center gap-4 px-3'>
                                
                                        {project.techsUsed?.map((tech: string, index: number) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="bg-gray-950 techs text-xs text-gray-400 border border-gray-400 border-b-[3px] lg:border-b-4 font-medium overflow-hidden relative px-3 lg:px-4 py-1 lg:py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                                                >
                                                    <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                                    {tech}
                                                </div>
                                            )
                                        })}
                                    </div> */}

                                    <Link href={project.link} target='_blank' className="w-full flex items-center justify-center cursor-pointer">
                                        <div
                                            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-black/90 group"
                                        >
                                            <span className ="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black/70 group-hover:h-full"></span>
                                            <span className ="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className ="w-5 h-5 text-primary">
                                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                                                </svg>
                                            </span>
                                            <span className ="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" className ="w-5 h-5 text-primary">
                                                    <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                                                </svg>
                                            </span>
                                            <span className ="relative w-full text-left transition-colors duration-200 ease-in-out text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 group-hover:text-white dark:group-hover:text-gray-200">Visit now</span>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


            <div className="w-full h-[100svh] card scroll relative">
                <div className="img absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] flex justify-center items-center px-8">
                    <div className="hidden lg:block size-[18rem] absolute top-[65%] right-[48%] -translate-y-1/2 bg-primary z-[2] blur-3xl rounded-full opacity-30" />
                    <div className="hidden lg:block size-[20rem] absolute top-[45%] left-[55%] -translate-y-1/2 -translate-x-1/2 bg-cyan-400 z-[2] blur-3xl rounded-full opacity-30" />
                    <div className="flex flex-col justify-center items-center gap-4 z-[3]">
                        <Image
                            className="scale-75"
                            src={EyeGif}
                            alt="gif"
                        />
                        <p className="text-slate-100 text-[.9rem] font-semibold lg:text-[1.2rem] -mt-8 lg:-mt-5 text-center">
                            These were just a few Projects we have done so
                            far :)
                        </p>
                        <Link
                            href="#"
                            className="text-white py-2 px-8 gap-3 mt-5 inline-flex justify-center items-center rounded-full bg-black"
                        >
                            <span className="text-[.9rem]">See more</span>
                            <i className="fa-light fa-arrow-up-right text-sm pt-1.5"></i>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects;
