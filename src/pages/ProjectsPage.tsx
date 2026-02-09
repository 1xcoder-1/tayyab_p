
import { motion, type Variants, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ProjectItem from '../components/Projects UI/ProjectItem';
import Contact from '../components/Contact';
import { nimg1, nimg2, nimg3 } from '../Images/Notes Flow';
import { qimg1, qimg2, qimg3 } from '../Images/Quran App';
import { wimg1, wimg2, wimg3 } from '../Images/Water Tracker';

const allProjectsData = [
    {
        title: "Notes Flow",
        tags: ["ios app", "Mobile App"],
        images: [
            nimg1,
            nimg2,
            nimg3,
        ],
    },
    {
        title: "Water Tracker",
        tags: ["iOS App", "Mobile App"],
        images: [
            wimg1,
            wimg2,
            wimg3
        ],
    },
    {
        title: "Quran Reader",
        tags: ["iOS App", "Mobile App"],
        images: [
            qimg1,
            qimg2,
            qimg3
        ],
    },

    {
        title: "Camhome",
        tags: ["Framer", "Template"],
        images: [
            "https://framerusercontent.com/images/6BzTpMXghcswxSpaZzRtLNmnRg.png?scale-down-to=512&width=2880&height=1900",
            "https://framerusercontent.com/images/JAg7KfuVKcig6IypiiOoaTXI6aE.jpg?scale-down-to=512&width=2880&height=1900",
            "https://framerusercontent.com/images/2TgzUSBwFMLj5FfgFrpbiESOOMM.jpg?scale-down-to=512&width=2880&height=1900"
        ],
    },
    {
        title: "COMMAND TMS",
        tags: ["DesignSystem", "Saas"],
        images: [
            "https://framerusercontent.com/images/Jtnq93J0CMfJ4WbWSHVfwXX9NU.jpg?scale-down-to=512&width=5760&height=3240",
            "https://framerusercontent.com/images/VbkkKj0YIsuFUcFgrQjP3c024HY.jpg?scale-down-to=512&width=5760&height=3240",
            "https://framerusercontent.com/images/jlyFVF4QgOtL8hl0kXvi0YHf1D0.jpg?scale-down-to=512&width=5760&height=3240"
        ],
    },
    {
        title: "My Playground",
        tags: ["Paratice", "Animation"],
        images: [
            "https://framerusercontent.com/images/r0RRWl16HsbxtaRhjF1jcLcw6wI.gif?scale-down-to=512&width=1920&height=1080",
            "https://framerusercontent.com/images/AvF5wJteV9mQMdiMQBJCjh3w.gif?scale-down-to=512&width=1920&height=1080",
            "https://framerusercontent.com/images/5xaR2xafuxXUYdytSBirkj8AE.png?scale-down-to=512&width=3840&height=2160"
        ],
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2,
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
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] as const,
        }
    }
};

const ProjectsPage = () => {
    const mainTitle = "All Work";
    const description = "A detailed collection of my work ranging from UI/UX design to interactive Framer templates.";
    const controls = useAnimation();

    useEffect(() => {
        controls.start("visible");
    }, [controls]);

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative pt-60 pb-52 overflow-hidden mb-20 [clip-path:polygon(0_0,100%_0,100%_93%,0_100%)] md:[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]"
                style={{
                    background: 'radial-gradient(91% 104% at 6.7% 3.4%, #1a1421 0%, #05010a 100%)',
                }}
                id="projects-header"
            >
                {/* Back to Home Button */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute top-24 left-6 z-50 md:left-12"
                >
                    <Link
                        to="/"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 group"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white group-hover:-translate-x-1 transition-transform duration-300"
                        >
                            <path d="m15 18-6-6 6-6" />
                        </svg>
                        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">Back to Home</span>
                    </Link>
                </motion.div>
                {/* Background Text Entrance */}
                <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none select-none">
                    <motion.span
                        initial={{ opacity: 0, y: 30, rotate: -7 }}
                        animate={{ opacity: 0.04, y: 0, rotate: -7 }}
                        transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
                        className="text-[23vw] font-black text-white whitespace-nowrap leading-none tracking-[0.05em] uppercase"
                        style={{
                            fontWeight: 900
                        }}
                    >
                        Works
                    </motion.span>
                </div>

                <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10 text-center">
                    <div className="flex flex-col items-center">
                        <motion.h1
                            variants={containerVariants}
                            initial="hidden"
                            animate={controls}
                            className="text-[clamp(1.5rem,10vw,8.5rem)] font-bold tracking-[0.08em] text-white mb-6 leading-[1.1] text-center"
                            style={{ perspective: '1000px' }}
                        >
                            {mainTitle.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={childVariants}
                                    style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h1>

                        <motion.div
                            variants={{
                                hidden: { opacity: 1 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.02,
                                        delayChildren: 0.4,
                                    }
                                }
                            }}
                            initial="hidden"
                            animate={controls}
                            className="text-gray-400 text-xl md:text-2xl font-normal max-w-2xl mx-auto leading-relaxed opacity-80 tracking-[0.03em] flex flex-wrap justify-center"
                            style={{ perspective: '1000px' }}
                        >
                            {description.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            y: 10,
                                            filter: 'blur(5px)',
                                        },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            filter: 'blur(0px)',
                                            transition: {
                                                duration: 0.6,
                                                ease: [0.16, 1, 0.3, 1] as const,
                                            }
                                        }
                                    }}
                                    style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <div className="flex flex-col gap-0 -mt-24 relative z-20">
                {allProjectsData.map((project, index) => (
                    <ProjectItem
                        key={index}
                        {...project}
                    />
                ))}
            </div>
            <Contact />
        </div>
    );
};

export default ProjectsPage;
