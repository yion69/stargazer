import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useRef } from "react";

export default function DelimeterText({ children }:{ children: string}) {

    gsap.registerPlugin(SplitText);

    const textRef = useRef(null);
    const timeline = useRef<gsap.core.Timeline>(null);
    const splitted = useRef<SplitText>(null);

    useEffect(() => {
        const initializeAnimation = async () => {
            await document.fonts.ready;

            if (textRef.current) {
                if (splitted.current) {
                    splitted.current.revert();
                    splitted.current = null;
                }
                if (timeline.current) {
                    timeline.current.kill();
                    timeline.current = null;
                }

                splitted.current = new SplitText(textRef.current, {
                    type: "chars",
                    charsClass: "char++",
                })

                timeline.current = gsap.timeline(({
                    delay: 0,
                    repeat: -1
                }))

                timeline.current.from(splitted.current.chars, {
                    y: -100,
                    opacity: 0,
                    rotation: "random(-80, 80)",
                    stagger: 0.25,
                    duration: 1,
                    ease: "back.out(1.7)"
                });
            }
        }

        initializeAnimation();

        return () => {
            if (splitted.current) {
                splitted.current.revert();
                splitted.current = null;
            }
            if (timeline.current) {
                timeline.current.kill();
                timeline.current = null;
            }
        };
    }, [])

    return (
        <span ref={ textRef } className="w-fit">{ children }</span>
    )
}