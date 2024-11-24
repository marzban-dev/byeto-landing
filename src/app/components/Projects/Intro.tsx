'use client'

import { gsap, ScrollTrigger } from '@/configs/gsap.config'
import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import Quote from '@/assets/images/quote.svg'

const Intro = () => {

    useGSAP(() => {
        
        const introTl = gsap.timeline({defaults: {opacity: 0}})
        .from('.projects-intro', {y: 30})
        .from('.projects-intro-text', {text: '', duration: 1.5})
        .from('.quote-right', {y: -30}, '<')
        .from('.quote-left', {y: 30}, '<')

        ScrollTrigger.create({
            trigger: '#projects-intro',
            start: '20% bottom',
            end: 'bottom center',
            scrub: true,
            animation: introTl,
        })
    })

    return (
        <div id='projects-intro' className='w-full flex h-[100px] lg:h-[180px] justify-center items-center z-10 overflow-visible relative projects-intro'>

            <Image src={Quote} alt='quote' className='size-[60px] pt-5 quote-left' />
            <p className="text-xl lg:text-5xl font-semibold text-slate-100 relative z-10 after:content-[''] after:w-[2px] after:animate-pulse projects-intro-text after:h-full after:bg-slate-100 after:absolute after:-right-3 after:top-[60%] after:-translate-y-1/2">Projects we have done</p>
            <Image src={Quote} alt='quote' className='size-[60px] rotate-180 pt-5 ml-3 quote-right' />
        </div>
    )
}

export default Intro
