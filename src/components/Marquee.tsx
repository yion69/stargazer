import gsap from "gsap"
import { Observer } from "gsap/Observer";
import horizontalLoop from "../utils/HeplerFunction";
import { useEffect, useRef } from "react";

export function Marquee({ direction }:{ direction: "left" | "right" }) {

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

interface data {
    name: string,
    image: string
}

export function PictureMarquee({ data }:{ data: data[] }) {
 
    const pictureMarqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const ctx = gsap.context(() => {
            const scrollingText = gsap.utils.toArray<HTMLParagraphElement>('.picture-marquee-item');

            if(scrollingText.length === 0) return;
            
            horizontalLoop(scrollingText, {
                repeat: -1,
                paused: false,
                speed: 1,
                loopGap: 10
            })

        }, pictureMarqueeRef)
        return () => ctx.revert();
    })

    return(
        <div ref={pictureMarqueeRef} className="picture-marquee-wrapper flex w-full h-full gap-2 overflow-hidden">
            {
                data.map((e,i) => (
                    <div key={i} className="picture-marquee-item flex items-center justify-center w-1/2 min-w-1/2 lg:min-w-1/3 h-full bg-white rounded-sm border border-zinc-200 overflow-hidden">
                        <img className="object-contain w-full h-full" src={e.image} alt={e.name} />
                    </div>
                ))
            }
        </div>
    )
}