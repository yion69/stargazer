import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

export default function ScrollSmootherWrapper({ children }:{ children: React.ReactNode}) {

    const smoothWrapperRef = useRef(null);
    const smoothContentRef = useRef(null);

    useEffect(() => {

        if(!smoothContentRef.current || !smoothWrapperRef.current) return;

        gsap.registerPlugin(ScrollSmoother,ScrollTrigger);
    
        const smoother = ScrollSmoother.create({
            wrapper: smoothWrapperRef.current,
            content: smoothContentRef.current,
            smooth: 2,
            effects: true
        })

        return () => { smoother.kill() };

    },[])


    return (
        <div ref={ smoothWrapperRef } className="smooth-wrapper">
            <div ref={ smoothContentRef } className="smoother-content">
                { children }
            </div>
        </div>
    )
}