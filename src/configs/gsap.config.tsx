import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin, TextPlugin);

// const useGsapConfig = () => {
//     useGSAP(() => {
//         // gsap code here...
//         gsap.to(".box", {x: 360}); // <-- automatically reverted
      
//     }, { scope: container });
// }

export {
    gsap, 
    ScrollTrigger
}
