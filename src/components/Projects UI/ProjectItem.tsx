import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectItemProps {
    title: string;
    images: string[];
    tags: string[];
}

const generateSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/[\s_]+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
};

const ProjectItem = ({ title, images, tags }: ProjectItemProps) => {
    const imageVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as const
            }
        })
    };

    return (
        <div className="relative w-full py-0 md:py-4 group overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className={`absolute left-0 right-0 h-[110px] top-1/2 -translate-y-full bg-[#A855F7] origin-left transform -skew-y-6 transition-transform duration-500`}
                />

                <div
                    className={`absolute left-0 right-0 h-[110px] top-1/2 bg-[#A855F7] opacity-60 origin-left transform -skew-y-6 transition-transform duration-500`}
                />
                <div
                    className={`absolute left-0 right-0 h-[30px] top-[calc(45%+148px)] bg-[#A855F7] opacity-10 origin-left transform -skew-y-6 transition-transform duration-500`}
                />
            </div>

            <div className="max-w-[1740px] mx-auto px-6 md:px-12 relative z-10">
                <div className="relative w-full h-[500px] flex items-center justify-center">

                    <div className="absolute top-[15%] md:top-[3.3%] left-1/2 -translate-x-1/2 w-screen text-center z-10 pointer-events-none mix-blend-multiply flex justify-center">
                        <motion.h3
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 1 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.05,
                                        delayChildren: 0.1,
                                    }
                                }
                            }}
                            className="text-[3.2rem] md:text-[4.38rem] font-black text-[#1e1e1e] tracking-tight md:tracking-evenly [word-spacing:10px] md:[word-spacing:20px] transform -rotate-6 whitespace-nowrap opacity-90 text-center"
                            style={{ textShadow: '0px 10px 40px rgba(0,0,0,0.1)' }}>
                            {title.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
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
                                    }}
                                    style={{ display: 'inline-block', whiteSpace: char === " " ? "pre" : "normal" }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h3>
                    </div>

                    <div className="relative w-full max-w-[1000px] h-[400px] z-20 mt-12 mx-auto">

                        <motion.div
                            custom={2}
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="hidden md:block absolute right-[10%] top-[4%] w-[30%] aspect-[16/10] bg-gray-900 rounded-none transform -rotate-[6deg] z-10 overflow-hidden transition-all duration-300"
                            style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
                        >
                            <img src={images[2]} alt="Project view 3" className="w-full h-full object-cover opacity-100 brightness-100" />
                        </motion.div>

                        <motion.div
                            custom={1}
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="hidden md:block absolute left-[39%] top-[17%] w-[30%] aspect-[16/10] bg-gray-900 rounded-none  transform -rotate-[6deg] z-20 overflow-hidden transition-all duration-300"
                            style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
                        >
                            <img src={images[1]} alt="Project view 2" className="w-full h-full object-cover opacity-100 brightness-100" />
                        </motion.div>

                        <motion.div
                            custom={0}
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="absolute left-1/2 -translate-x-1/2 top-[20%] md:top-[28%] md:left-[18%] md:translate-x-0 w-[85%] md:w-[30%] aspect-[16/10] bg-gray-900 rounded-none transform -rotate-[6deg] z-30 overflow-hidden transition-all duration-300 shadow-2xl"
                            style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
                        >
                            <img src={images[0]} alt="Project view 1" className="w-full h-full object-cover opacity-100 brightness-100" />
                        </motion.div>

                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="absolute bottom-6 md:bottom-24 right-0 md:right-45 z-[60] transform -rotate-6 pointer-events-auto"
                    >
                        <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-2 mb-1">
                                {tags.map((tag, i) => (
                                    <span key={i} className="text-[#2dd4bf] text-lg md:text-xl font-mono tracking-tight shadow-sm">
                                        {tag} {i < tags.length - 1 && <span className="text-[#2dd4bf]/40">•</span>}
                                    </span>
                                ))}
                            </div>

                            <Link
                                to={`/projects/${generateSlug(title)}`}
                                className="group/btn flex items-center gap-3 text-[22px] text-black hover:text-[#9333ea] transition-colors duration-300 p-2 -m-2 cursor-pointer pointer-events-auto"
                            >
                                View Details
                                <ArrowRight className="w-8 h-8 transition-transform group-hover/btn:translate-x-2" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
