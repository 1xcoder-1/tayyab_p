import { useRef, useEffect } from 'react';
import { useInView, useMotionValue, useSpring, motion, type Variants } from 'framer-motion';

const childVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(10px)',
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        }
    }
};

const StatItem = ({ number, label, subLabel }: { number: string; label: string; subLabel?: string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });
    const numericValue = parseInt(number.replace(/\D/g, '')) || 0;
    const suffix = number.replace(/[0-9]/g, '');

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 50, stiffness: 200 });

    useEffect(() => {
        if (isInView) {
            motionValue.set(numericValue);
        }
    }, [isInView, numericValue, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest: number) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toFixed(0) + suffix;
            }
        });
    }, [springValue, suffix]);

    return (
        <motion.div
            ref={containerRef}
            className="flex flex-col items-start"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 1 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.2
                    }
                }
            }}
        >
            <h3 className="text-6xl md:text-6xl font-semibold tracking-tighter mb-1 font-['Clash_Display'] flex">
                <motion.span
                    variants={childVariants}
                    ref={ref}
                >
                    0{suffix}
                </motion.span>
            </h3>
            <p className="text-lg text-gray-400 font-medium leading-tight flex flex-wrap">
                {label.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={childVariants}
                        style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                    >
                        {char}
                    </motion.span>
                ))}
            </p>
            {subLabel && (
                <p className="text-lg text-gray-400 font-medium leading-tight flex flex-wrap">
                    {subLabel.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            variants={childVariants}
                            style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </p>
            )}
        </motion.div>
    );
};
export default StatItem;