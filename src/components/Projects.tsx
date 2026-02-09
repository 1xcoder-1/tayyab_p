import { ArrowRight } from 'lucide-react';
import ProjectItem from './Projects UI/ProjectItem';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { nimg1, nimg2, nimg3 } from '../Images/Notes Flow';
import { qimg1, qimg2, qimg3 } from '../Images/Quran App';
import { wimg1, wimg2, wimg3 } from '../Images/Water Tracker';

const projectsData = [
    {
        title: "Notes Flow",
        tags: ["iOS App", "Mobile App"],
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
    }
];

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
            ease: [0.16, 1, 0.3, 1],
        }
    }
};

const Projects = () => {
    return (
        <section className="relative w-full bg-white py-20 z-20 overflow-hidden" id="projects">

            <div className="max-w-[1240px] mx-auto px-6 md:px-12 mb-6 md:mb-16">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                    <div className="flex flex-col items-start gap-6">
                        <motion.div
                            className="relative inline-block"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            <motion.h2
                                className="text-5xl md:text-7xl font-semibold tracking-tight text-black relative z-10 font-sans"
                                variants={containerVariants}
                            >
                                {"Projects".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={childVariants}
                                        style={{ display: 'inline-block' }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h2>
                            <motion.div
                                className="absolute top-[15%] left-[-1%] w-[30%] h-[7px] md:h-[7px] bg-[#9333ea] transform -rotate-10 z-20 mix-blend-multiply opacity-90 pointer-events-none"
                                initial={{ width: 0, opacity: 0 }}
                                whileInView={{ width: "30%", opacity: 0.9 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                viewport={{ once: true }}
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to="/projects"
                                className="relative group inline-block p-[1.5px] overflow-hidden"
                            >
                                <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#A855F7_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative flex items-center gap-2 px-4.5 py-1.5 z-10"
                                    style={{
                                        background: 'linear-gradient(161deg, #6d28d9 0%, #130321 47.75%, #6d28d9 100%)'
                                    }}
                                >
                                    <span className="font-medium text-lg tracking-wide text-white group-hover:translate-x-1 transition-transform duration-300">View All</span>
                                    <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300 delay-75" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        className="max-w-xl md:text-right pb-0 md:pb-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        variants={{
                            hidden: { opacity: 1 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.012,
                                    delayChildren: 0.2,
                                }
                            }
                        }}
                    >
                        <p className="text-[#64748b] text-lg md:text-xl font-normal leading-relaxed font-sans">
                            {"Explore my selected projects to discover my design style and professional skills.".split("").map((char, index) => (
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
                </div>
            </div>

            <div className="flex flex-col gap-0">
                {projectsData.map((project, index) => (
                    <ProjectItem
                        key={index}
                        {...project}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
