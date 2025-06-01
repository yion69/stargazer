import gsap from "gsap"
import clsx from "clsx";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import type { DATA_CAROUSEL_TYPE } from "../pages/LandingPage";
import CloudinaryImage from "./Image";

export default function Carousel({ data }:{ data:DATA_CAROUSEL_TYPE[] }) {
    
    const carouselRef = useRef<HTMLDivElement>(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
 
        if(!carouselRef.current){ return };

        let ctx = gsap.context(() => {
            
            ScrollTrigger.create({
                trigger: carouselRef.current,
                pin: false,
                start: "top top",
                end: () => `+=${carouselRef.current?.scrollWidth ?? 3000}`,
                scrub: true,
                anticipatePin: 1,
            });
        }, carouselRef)

        return () => ctx.revert();
        
    },[])
 
    //weird ahh code with the help of "aRtiFiCiaL iNteLligeNcE"
    useEffect(() => {
        const el = carouselRef.current;

        if(!el) { return };

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            gsap.to(el, {
              scrollLeft: el.scrollLeft + e.deltaY * 2,
              duration: 0.5,
              ease: "power2.out"
            });
        };

        el.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            el.removeEventListener("wheel", onWheel);
        };
    },[])

    return(
        <div ref={ carouselRef } className="carousel overflow-x-scroll w-full h-full flex items-center scrollbar-hide">
            <div className="inner-carousel flex flex-nowrap w-full h-full gap-4">
                {
                    data.map((e, i) => (
                        <div key={i} className="carousel-item w-full h-full flex-shrink-0 flex items-center justify-center bg-white rounded-md border border-zinc-200 overflow-hidden">
                            <div className={clsx("hidden md:flex lg:flex flex-col items-center justify-center w-4/12 h-full p-4 ", `bg-[${e.background}]`)}>
                                <CloudinaryImage image_id={e.brand_img} />
                            </div>
                            <div className="grid grid-cols-3 w-full lg:w-8/12 h-full bg-zinc-100">
                                <div className="h-full w-full">
                                    <CloudinaryImage image_id={e.image_1} className="h-full w-full" />
                                </div>
                                <div className="h-full w-full">
                                    <CloudinaryImage image_id={e.image_2} className="h-full w-full" />
                                </div>
                                <div className="h-full w-full">
                                    <CloudinaryImage image_id={e.image_3} className="h-full w-full" />
                                </div>
                            </div>
                        </div>
                    ))
                } 
            </div>
        </div>
    )
}