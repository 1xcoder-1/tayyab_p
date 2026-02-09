import { useRef, useEffect } from 'react';
import { useInView, motion, useAnimation, } from 'framer-motion';
import type { Variants } from 'framer-motion';
import StatItem from './StatItem';


const AboutContent = () => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    const headingText = "Who am I";

    const containerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            }
        }
    };

    const paragraphContainerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.012,
                delayChildren: 0.1,
            }
        }
    };

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
                ease: [0.16, 1, 0.3, 1] as const,
            }
        }
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div ref={ref} className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-4 flex flex-col items-start">
                    <div className="relative mb-10 inline-block">
                        <motion.h2
                            variants={containerVariants}
                            initial="hidden"
                            animate={controls}
                            className="text-4xl md:text-6xl font-semibold tracking-tighter [word-spacing:5px] text-white relative z-10"
                        >
                            {headingText.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={childVariants}
                                    style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h2>
                        <div className="absolute top-[20%] left-[-2%] w-[38%] h-[6px] md:h-[7px] bg-[#A855F7] transform -rotate-8 z-20 mix-blend-normal" />
                    </div>

                    <motion.div
                        className="mb-8"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={controls}
                        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <a
                            href="https://read.cv/chi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group inline-block p-[1.5px] overflow-hidden"
                        >
                            <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#A855F7_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative flex items-center gap-2 px-6 py-2 z-10"
                                style={{
                                    background: 'linear-gradient(161deg, #6d28d9 0%, #130321 47.75%, #6d28d9 100%)'
                                }}
                            >
                                <span className="font-medium text-lg tracking-wide text-white group-hover:translate-x-1 transition-transform duration-300">Get Resume</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300 delay-75">
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                </svg>
                            </div>
                        </a>
                    </motion.div>
                </div>

                <div className="md:col-span-8 flex flex-col md:pl-8">
                    <motion.div
                        className="max-w-4xl mb-8"
                        variants={paragraphContainerVariants}
                        initial="hidden"
                        animate={controls}
                        transition={{ delayChildren: 0.4 }}
                    >
                        <p className="text-xl md:text-[22px] font-normal leading-relaxed text-gray-200">
                            {"UI/UX Designer with hands on experience, focused on clean, user centered digital products. Worked on freelance projects, including UI/UX for Javed Ahmed Ghamidi’s digital initiatives, gaining experience in research, user flows, and interface design.".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={childVariants}
                                    style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                    className={char === " " ? "mr-1" : ""}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex items-center gap-6 mb-14 border-l-[1px] border-white/20 pl-6"
                        variants={paragraphContainerVariants}
                        initial="hidden"
                        animate={controls}
                        transition={{ delayChildren: 0.5 }}
                    >
                        <p className="text-gray-500 text-base md:text-lg font-normal leading-relaxed max-w-3xl">
                            {"I care about clarity, usability, and building interfaces that feel intuitive — not just visually appealing.".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={childVariants}
                                    style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-12"
                        variants={fadeInUp}
                        initial="hidden"
                        animate={controls}
                        transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <StatItem number="2+" label="Years of" subLabel="experience" />
                        <StatItem number="10+" label="Projects delivered" />
                        <StatItem number="3" label="Figma" subLabel="Templates" />

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;