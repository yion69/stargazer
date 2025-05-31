import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

import brand_1 from "../../public/brand/1.png"
import brand_1_1 from "../../public/brand/1.1.png"
import brand_1_2 from "../../public/brand/1.2.png"
import brand_1_3 from "../../public/brand/1.3.png"

import brand_2 from "../../public/brand/33.png"
import brand_2_1 from "../../public/brand/2.1.png"
import brand_2_2 from "../../public/brand/2.2.png"
import brand_2_3 from "../../public/brand/2.3.png"

import brand_3 from "../../public/brand/3.png"
import brand_3_1 from "../../public/brand/3.1.png"
import brand_3_2 from "../../public/brand/3.2.png"
import brand_3_3 from "../../public/brand/3.3.png"
import clsx from "clsx";

export default function Carousel() {
    
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
    
    const data = [
        {
            brand_img: brand_1,
            image_1: brand_1_1,
            image_2: brand_1_2,
            image_3: brand_1_3,
            background: "transparent",
        },
        {
            brand_img: brand_2,
            image_1: brand_2_1,
            image_2: brand_2_2,
            image_3: brand_2_3,
            background: '#79787d',
        },
        {
            brand_img: brand_3,
            image_1: brand_3_1,
            image_2: brand_3_2,
            image_3: brand_3_3,
            background: '#c9c8d1',
        },
    ]
    return(
        <div ref={ carouselRef } className="carousel overflow-x-scroll w-full h-full flex items-center scrollbar-hide">
            <div className="inner-carousel flex flex-nowrap w-full h-full gap-4">
                {
                    data.map((e, i) => (
                        <div key={i} className="carousel-item w-full h-full flex-shrink-0 flex items-center justify-center bg-white rounded-md border border-zinc-200 overflow-hidden">
                            <div className={clsx("hidden md:flex lg:flex flex-col items-center justify-center w-4/12 h-full p-4 ", `bg-[${e.background}]`)}>
                                <img src={ e.brand_img } alt="brand" />
                            </div>
                            <div className="grid grid-cols-3 w-full lg:w-8/12 h-full bg-zinc-100">
                                <div className="h-full">
                                    <img className="h-full" src={ e.image_1 } alt="" />
                                </div>
                                <div className="h-full">
                                    <img className="h-full" src={ e.image_2 } alt="" />
                                </div>
                                <div className="h-full">
                                    <img className="h-full" src={ e.image_3 } alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}