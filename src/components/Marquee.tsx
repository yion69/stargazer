import gsap from "gsap"
import { Observer } from "gsap/Observer";
import horizontalLoop from "../utils/HeplerFunction";
import { useEffect, useRef } from "react";

export default function Marquee({ direction }:{ direction: "left" | "right" }) {

    const marqueeRef = useRef(null);

    useEffect(() => {
 
        gsap.registerPlugin(Observer);

        const ctx = gsap.context(() => {
            const scrollingText = gsap.utils.toArray<HTMLParagraphElement>('.marquee p');

            if(scrollingText.length === 0) return;
            
            const tl  = horizontalLoop(scrollingText, {
                repeat: -1,
            })

            if (direction === "right") {
                tl.progress(1);
                tl.timeScale(-1);
            } else {
                tl.timeScale(1);
            }
        }, marqueeRef)
        return () => ctx.revert();
    })

    return (
        <div ref={marqueeRef} className="marquee flex items-center w-full overflow-hidden whitespace-nowrap relative font-megrim font-semibold">
            <p className="inline-block text-5xl px-4">
                FASHION IN MOTION — UNVEIL YOUR EDGE CURATED STYLE FOR THE FEARLESS NOW SHIPPING WORLDWIDE
            </p>
            <p className="inline-block text-5xl px-4">
                MODERN. BOLD. UNAPOLOGETIC STARGAZER SEASON '25 NEXT-GEN LOOKS — TAILORED FOR YOU
            </p>
        </div>
    )
}