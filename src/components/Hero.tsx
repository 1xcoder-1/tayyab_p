import { useEffect } from 'react';
import HeroBackground from './HeroBackground';
import { motion, useAnimation, type Variants } from 'framer-motion';
import { Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8 } from '../Images';

interface HeroProps {
    startAnimation: boolean;
}

const Hero = ({ startAnimation }: HeroProps) => {
    const controls = useAnimation();

    useEffect(() => {
        if (startAnimation) {
            controls.start("visible");
        } else {
            controls.set("hidden");
        }
    }, [startAnimation, controls]);

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

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-25 pb-20 overflow-hidden bg-white" id="hero">
            <HeroBackground />
            <div className="relative z-10 w-full max-w-[1400px] px-6 flex flex-col items-center text-center">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 15 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={controls}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mb-3"
                >
                    <motion.a
                        href="#footer-trigger"
                        initial="initial"
                        whileHover="hover"
                        variants={{
                            hover: {
                                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                            }
                        }}
                        className="flex items-center gap-2.5 p-[10px_20px_10px_12px] bg-white rounded-[50px] shadow-[0_0.5px_1px_-1px_rgba(0,0,0,0.08),0_4px_8.8px_-2px_rgba(0,0,0,0.12)] cursor-pointer group transition-shadow duration-300"
                    >
                        <motion.div
                            variants={{
                                hover: { scale: 1.8, rotate: 14 }
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="w-8 h-8 rounded-full bg-[#6133ed] overflow-hidden flex-shrink-0 shadow-[0_2px_4px_rgba(97,51,237,0.2)]"
                        >
                            <img
                                src="https://framerusercontent.com/images/wMBFQWbWyZ668yZ7H0x1spjyH4.png?scale-down-to=512&width=1024&height=1024"
                                alt="Tayyab"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.span
                            variants={{
                                hover: { x: 2, color: '#2970ff' }
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-[17px] font-medium text-[#646e82] tracking-tight leading-none"
                        >
                            Hey, I'm Tayyab
                        </motion.span>
                    </motion.a>
                </motion.div>

                <div className="w-full px-4 select-none flex justify-center mb-8 max-w-[1200px]">
                    <motion.h1
                        variants={containerVariants}
                        initial="hidden"
                        animate={controls}
                        className="text-[clamp(1.2rem,8vw,11rem)] font-semibold tracking-[0.06em] leading-[0.9] text-[#A855F7] text-center flex flex-col items-center "
                        style={{ perspective: '1000px' }}
                    >
                        <span className="block">
                            {"Freelancer UI/UX".split("").map((char, index) => (
                                <motion.span
                                    key={`line1-${index}`}
                                    variants={childVariants}
                                    style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                        <span className="block">
                            {"Designer".split("").map((char, index) => (
                                <motion.span
                                    key={`line2-${index}`}
                                    variants={childVariants}
                                    style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>
                </div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] as const } }
                    }}
                    initial="hidden"
                    animate={controls}
                    className="flex justify-center w-full"
                >
                    <motion.a
                        href="#"
                        initial="initial"
                        whileHover="hover"
                        whileTap={{ scale: 0.97 }}
                        className="relative group inline-block p-[1.5px] overflow-hidden"
                    >
                        <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#A855F7_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative flex items-center gap-2 px-5 py-2 z-10"
                            style={{
                                background: 'linear-gradient(161deg, #6d28d9 0%, #130321 47.75%, #6d28d9 100%)'
                            }}
                        >
                            <span className="font-medium text-lg tracking-wide text-white group-hover:translate-x-1 transition-transform duration-300">Let's Work</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300 delay-75">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </div>
                    </motion.a>
                </motion.div>
            </div>

            <div className="absolute inset-0 z-20 pointer-events-none select-none">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    initial="hidden"
                    animate={controls}
                    whileHover={{ scale: 1.12, rotate: -6, zIndex: 50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-[18%] md:top-[12%] overflow-hidden pointer-events-auto cursor-pointer shadow-3xl z-[27] will-change-transform w-[clamp(180px,26.4vw,380px)] lg:w-[clamp(160px,20vw,280px)] 2xl:w-[clamp(180px,26.4vw,380px)] h-[clamp(115px,16.7vw,240px)] lg:h-[clamp(100px,12.6vw,180px)] 2xl:h-[clamp(115px,16.7vw,240px)]"
                    style={{
                        left: '2.5%'
                    }}
                >
                    <img
                        src={Img8}
                        className="w-full h-full object-cover"
                        alt="Project 1"
                    />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay: 0.1, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    initial="hidden"
                    animate={controls}
                    whileHover={{ scale: 1.12, rotate: -8, zIndex: 50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-[5%] md:top-[1%] left-[43.5%] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden z-20 pointer-events-auto cursor-pointer w-[clamp(150px,29vw,300px)] lg:w-[clamp(130px,22vw,220px)] 2xl:w-[clamp(150px,29vw,300px)] h-[clamp(95px,18vw,200px)] lg:h-[clamp(85px,14vw,150px)] 2xl:h-[clamp(95px,18vw,200px)]"
                >
                    <img src={Img1} className="w-full h-full object-cover" alt="Project 2" />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    initial="hidden"
                    animate={controls}
                    whileHover={{ scale: 1.12, rotate: -5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-[-1%] right-[30%] w-[12%] md:w-[16%] lg:w-[13%] 2xl:w-[16%] max-w-[200px] shadow-[0_15px_30px_rgba(0,0,0,0.08)] overflow-hidden z-10 pointer-events-auto cursor-pointer"
                >
                    <img src={Img5} className="w-full h-auto" alt="Project 3" />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    initial="hidden"
                    animate={controls}
                    whileHover={{ scale: 1.12, rotate: -7 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-[26%] md:top-[16%] right-[2%] shadow-[0_40px_80px_rgba(0,0,0,0.18)] overflow-hidden pointer-events-auto cursor-pointer w-[clamp(150px,22vw,290px)] lg:w-[clamp(130px,18vw,220px)] 2xl:w-[clamp(150px,22vw,290px)] h-[clamp(100px,13vw,185px)] lg:h-[clamp(85px,10vw,140px)] 2xl:h-[clamp(100px,13vw,185px)]"
                >
                    <img src={Img4} className="w-full h-full object-cover" alt="Project 4" />
                </motion.div>
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-end">
            </div>

            <div className="absolute inset-0 z-[25] pointer-events-none select-none">
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 110 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.65, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    initial="hidden"
                    animate={controls}
                    whileHover={{ scale: 1.12, rotate: -7 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-[75%] md:top-auto md:bottom-[3%] pointer-events-auto cursor-pointer z-[26] will-change-transform w-[clamp(100px,19vw,280px)] lg:w-[clamp(90px,15vw,210px)] 2xl:w-[clamp(100px,19vw,280px)] h-[clamp(100px,13.9vw,200px)] lg:h-[clamp(90px,11vw,150px)] 2xl:h-[clamp(100px,13.9vw,200px)]"
                    style={{
                        left: '-2.2%',
                        filter: 'drop-shadow(rgba(4, 18, 36, 0.2) 0px 23px 22px)'
                    }}
                >
                    <img
                        src={Img2}
                        className="w-full h-full object-contain"
                        alt="Project Back"
                    />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    initial="hidden"
                    animate={controls}
                    whileHover={{ scale: 1.12, rotate: -7, zIndex: 60 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-[68%] md:top-auto md:bottom-[10%] overflow-hidden pointer-events-auto cursor-pointer shadow-3xl z-[27] will-change-transform w-[clamp(150px,21.2vw,305px)] lg:w-[clamp(130px,17vw,230px)] 2xl:w-[clamp(150px,21.2vw,305px)] h-[clamp(100px,14.6vw,210px)] lg:h-[clamp(85px,11.7vw,160px)] 2xl:h-[clamp(100px,14.6vw,210px)]"
                    style={{
                        left: '8%'
                    }}
                >
                    <img
                        src={Img3}
                        alt="Shoe Showcase"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    initial="hidden"
                    animate={controls}
                    whileHover={{ scale: 1.12, rotate: -8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-[83%] md:top-auto md:bottom-[3%] right-[6%] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden z-20 pointer-events-auto cursor-pointer w-[clamp(180px,34vw,430px)] lg:w-[clamp(170px,25vw,320px)] 2xl:w-[clamp(180px,34vw,430px)] h-[clamp(140px,18.8vw,270px)] lg:h-[clamp(120px,14vw,200px)] 2xl:h-[clamp(140px,18.8vw,270px)]"
                >
                    <img src={Img7} className="w-full h-full object-cover" alt="Bottom Project 1" />
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    initial="hidden"
                    animate={controls}
                    whileHover={{ scale: 1.12, rotate: -5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute top-[79%] md:top-auto md:bottom-[17%] right-[2%] shadow-[0_15px_30px_rgba(0,0,0,0.08)] overflow-hidden z-10 pointer-events-auto cursor-pointer w-[clamp(100px,16.6vw,300px)] lg:w-[clamp(90px,13vw,220px)] 2xl:w-[clamp(100px,16.6vw,300px)] h-[clamp(90px,10.4vw,150px)] lg:h-[clamp(80px,8vw,110px)] 2xl:h-[clamp(90px,10.4vw,150px)]"
                >
                    <img src={Img6} className="w-full h-full object-cover" alt="Bottom Project 2" />
                </motion.div>
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
                {[0, 25, 50, 75, 100].map((top) => (
                    <div key={top} className="absolute w-full h-px bg-black skew-y-[-10deg]" style={{ top: `${top}%` }} />
                ))}
            </div>
        </section>
    );
};

export default Hero;
