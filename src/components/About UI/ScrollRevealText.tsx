import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import Word from './Word';


const ScrollRevealText = ({ children, className = "", highlightColor = "text-white" }: { children: string, className?: string, highlightColor?: string }) => {
    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ['start 0.9', 'start 0.25']
    });

    const words = children.split(" ");

    return (
        <p className={`${className} flex flex-wrap gap-[0.25em]`} ref={element}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]} highlightColor={highlightColor}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
};

export default ScrollRevealText;
