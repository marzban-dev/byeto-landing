"use client";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect } from "react";

function SmoothScrolling({ children }: any) {

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach((el) => {
            el.addEventListener('click', (e) => {
                e.preventDefault()
                const id = el.getAttribute('href')?.slice(1)
                if (!id) return
                const target = document.getElementById(id)
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' })
                }
            })
        })
    }, [])


    return (
        // @ts-ignore
        <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;