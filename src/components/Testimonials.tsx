import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform, type Variants } from 'framer-motion';
import { Hexagon } from 'lucide-react';
import { cimg1, cimg2, cimg3 } from '../Images/Clients Reviews/index';

const testimonialsData = [
    {
        id: 1,
        name: "Malik Siam",
        role: "Ceo of Innvoy Global",
        quote: (
            <>
                Tayyab’s behavior driven designs significantly improve our product's usability and clarity.
            </>
        ),
        image: cimg1,
        gradient: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)", // Blue
        logoColor: "text-blue-100",
        className: "z-10",
        initialX: 0
    },
    {
        id: 2,
        name: "Javed Ahmed Ghamidi",
        role: "Islamic Scholar",
        quote: (
            <>
                Tayyab’s designs simplify complex content through clarity and intuitive navigation.
            </>
        ),
        image: cimg2,
        gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)", // Emerald/Green
        logoColor: "text-emerald-100",
        className: "z-20",
        initialX: 50 // Offset for stacked look
    },
    {
        id: 3,
        name: "Muhammad Musab",
        role: "Agency Owner",
        quote: (
            <>
                Tayyab quickly translates requirements into clean, practical interfaces that prioritize user flow and clarity.
            </>
        ),
        image: cimg3,
        gradient: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)", // Purple
        logoColor: "text-purple-100",
        className: "z-30",
        initialX: 100 // Offset for stacked look
    }
];

const Testimonials = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const controls = useAnimation();
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });

    // Scroll Progress for Cards
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });


    const card2X = useTransform(scrollYProgress, [0.15, 0.5], ["-80vw", "0%"]);
    const card2Rotate = useTransform(scrollYProgress, [0.15, 0.5], [-20, 0]);
    const card2Scale = useTransform(scrollYProgress, [0.15, 0.5], [1.1, 1]);
    const card2Opacity = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);

    const card3X = useTransform(scrollYProgress, [0.45, 0.8], ["-80vw", "0%"]);
    const card3Rotate = useTransform(scrollYProgress, [0.45, 0.8], [-20, 0]);
    const card3Scale = useTransform(scrollYProgress, [0.45, 0.8], [1.1, 1]);
    const card3Opacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);


    useEffect(() => {
        if (isHeadingInView) {
            controls.start("visible");
        }
    }, [isHeadingInView, controls]);



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
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
            }
        }
    };

    const firstCardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 50,
            filter: 'blur(10px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                delay: 0.4
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            id="testimonials"
            className="relative w-full z-20 mt-[-13vw] md:mt-[-8vw] [clip-path:polygon(0_12vw,100%_0,100%_96%,0%_100%)] md:[clip-path:polygon(0_13vw,100%_2%,100%_98%,0%_100%)]"
            style={{
                height: isMobile ? 'auto' : '260vh',
                paddingTop: '0',
                background: 'radial-gradient(91% 104% at 6.7% 3.4%, #352842 0%, #0D0219 100%)'
            }}
        >
            <div className={`w-full flex flex-col items-center justify-center pt-[10vh] md:pt-[15vh] ${isMobile ? 'relative pb-24' : 'sticky top-0 h-screen overflow-hidden'}`}>
                <div className="max-w-[1240px] w-full mx-auto px-6 md:px-12 relative z-10">

                    <div ref={headingRef} className="relative mb-4 md:mb-6 lg:mt-24 2xl:mt-0 inline-block">
                        <motion.h2
                            variants={containerVariants}
                            initial="hidden"
                            animate={controls}
                            className="text-[40px] md:text-[50px] font-bold tracking-[1px] [word-spacing:5px] text-white relative z-30 flex flex-col items-start md:block"
                        >
                            <span className="block md:inline whitespace-nowrap">
                                {"Why Partners ".split("").map((char, index) => (
                                    <motion.span
                                        key={`line1-${index}`}
                                        variants={childVariants}
                                        style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="block md:inline whitespace-nowrap">
                                {"Trust Me".split("").map((char, index) => (
                                    <motion.span
                                        key={`line2-${index}`}
                                        variants={childVariants}
                                        style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h2>
                        <div className="absolute top-[18%] md:top-[33%] left-[-1%] w-[60px] md:w-[80px] h-[6px] md:h-[7px] bg-[#A855F7] transform -rotate-8 z-40 mix-blend-normal" />
                    </div>

                    <div className={`relative w-full flex ${isMobile ? 'flex-col gap-6' : 'h-[400px] items-center justify-center md:justify-start'}`}>

                        {testimonialsData.map((item, index) => {

                            let style = {};
                            if (isMobile) {
                                style = {
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    rotate: 0,
                                    filter: 'blur(0px)',
                                    zIndex: 10
                                };
                            } else {
                                if (index === 0) {
                                    style = { x: 0, y: 0, zIndex: 10, scale: 1 };
                                } else if (index === 1) {
                                    style = { x: card2X, rotate: card2Rotate, scale: card2Scale, y: -60, opacity: card2Opacity, left: '30%', zIndex: 20 };
                                } else if (index === 2) {
                                    style = { x: card3X, rotate: card3Rotate, scale: card3Scale, y: -120, opacity: card3Opacity, left: '57%', zIndex: 30 };
                                }
                            }

                            return (
                                <motion.div
                                    key={item.id}
                                    style={style}
                                    variants={!isMobile && index === 0 ? firstCardVariants : undefined}
                                    initial={!isMobile && index === 0 ? "hidden" : "visible"}
                                    animate={isMobile ? { opacity: 1, y: 0, filter: 'blur(0px)' } : (index === 0 ? controls : undefined)}
                                    className={`${isMobile ? 'relative w-full' : 'absolute w-full max-w-[500px]'} shadow-2xl group ${item.className}`}
                                >
                                    <div className="h-[360px] md:h-[310px] w-full flex flex-col relative bg-[#1e293b]">

                                        <div className="absolute top-0 left-0 right-0 h-[75%] z-0"
                                            style={{
                                                background: item.gradient,
                                                clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 85%)'
                                            }}
                                        />

                                        <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">

                                            <div>
                                                <div className={`flex items-center gap-2 mb-6 ${item.logoColor}`}>
                                                    <Hexagon className="w-6 h-6 fill-current" />
                                                    <span className="font-semibold text-lg tracking-[1px]">Client Review</span>
                                                </div>

                                                <p className="text-lg md:text-1xl font-medium leading-normal tracking-[0.8px]">
                                                    {item.quote}
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-4 mt-auto">
                                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <h4 className="font-semibold text-lg leading-tight tracking-[0.6px]">{item.name}</h4>
                                                    <p className="text-sm text-white/60 tracking-[0.6px]">{item.role}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
