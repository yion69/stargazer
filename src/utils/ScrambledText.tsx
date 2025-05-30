import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/all";
import { useRef } from "react";

export default function ScrambleText({ children }:{ children: string}) {

    gsap.registerPlugin(ScrambleTextPlugin);

    const textRef = useRef(null);
    const animation = useRef<gsap.core.Tween>(null);

    const handleHover = () => {
        if (!textRef.current) return;

        animation.current?.kill();
        
        animation.current = gsap.to(textRef.current, {
        duration: 0.3,
        scrambleText: {
            text: children,
            speed: 1.5,
            revealDelay: 0,
            rightToLeft: true,
        },
        onComplete: () => {
            gsap.to(textRef.current, {
            duration: 0.3,
            scrambleText: {
                text: children,
                chars: '',
                speed: 1.5,
                revealDelay: 0
            }
            });
        }
        });
    };

    return (
        <span ref={ textRef } onMouseEnter={ handleHover } className="w-fit">{ children }</span>
    )
}