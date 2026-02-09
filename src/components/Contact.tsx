import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, ArrowUp } from 'lucide-react';

// WhatsApp Icon SVG
const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section className="relative w-full bg-white overflow-hidden" id="contact">
            <div className="absolute top-[25%] left-0 right-0 h-[20vh] bg-[#A855F7] transform -skew-y-7 origin-top-left z-10" />
            <div className="absolute top-[calc(25%+20vh)] left-0 right-0 h-[20vh] bg-[#CB99FA] transform -skew-y-7 origin-top-left z-10" />

            <div className="absolute bottom-[0%] right-[-5%] w-[950px] h-[180px] z-50 pointer-events-none overflow-hidden">
                <div
                    className="w-full h-full"
                    style={{
                        background: 'radial-gradient(91% 104% at 6.7% 3.4%, #352842 0%, #0D0219 100%)',
                        clipPath: 'polygon(100% 20%, 100% 100%, 0 100%, 0 100%)',
                        opacity: 1
                    }}
                />
            </div>

            <button
                onClick={scrollToTop}
                className="absolute bottom-9 md:bottom-9 right-5 md:right-12 z-[60] p-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white transition-all duration-300 backdrop-blur-md group"
                aria-label="Scroll to top"
            >
                <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
            <div className="relative z-20 h-auto flex items-center">
                <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 pt-20 pb-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div className="flex flex-col gap-14 pt-24 pb-20">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="hidden md:flex flex-col gap-2"
                            >
                                <h2 className="text-6xl md:text-[5.5rem] font-semibold text-white leading-[0.95] tracking-wide transform -rotate-7 origin-left whitespace-nowrap">
                                    <span className="opacity-60">Let&apos;s bring</span> <span className="opacity-90">your vision to</span>
                                </h2>
                                <h2 className="text-6xl md:text-[5.5rem] font-semibold text-white leading-[0.95] tracking-wide transform -rotate-7 origin-left whitespace-nowrap">
                                    <span className="opacity-70">our</span> <span className="opacity-100">life.</span>
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="flex flex-col gap-6 items-start mt-[-16px] ml-6 transform -rotate-7 origin-left"
                            >
                                <a
                                    href="mailto:tayyab16039@gmail.com"
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
                                        <span className="font-medium text-lg tracking-wide text-white group-hover:translate-x-1 transition-transform duration-300">Contact Me</span>
                                        <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300 delay-75" />
                                    </div>
                                </a>

                                <div className="flex items-center gap-6 mt-2">
                                    <a href="https://www.linkedin.com/in/muhammad-tayyab-838a2939b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                                        <Linkedin size={28} strokeWidth={1.5} />
                                    </a>
                                    <a href="https://www.instagram.com/design.tayyab?igsh=MTQ0YW95MXFsMDV5" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                                        <Instagram size={28} strokeWidth={1.5} />
                                    </a>
                                    <a href="https://wa.me/+923081603939" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                                        <WhatsAppIcon />
                                    </a>
                                    <a href="https://www.behance.net/tayyabshabbir16" target="_blank" rel="noopener noreferrer" className="text-white text-2xl font-bold hover:opacity-80 transition-opacity">
                                        Bē
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.4 }}
                                className="text-black text-base space-y-1 rotate-[-7deg]"
                            >
                                <p className="font-medium">Copyright © 2025. Crafted with Passion</p>
                                <p>Designed By Tayyab Shabbir</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, x: 50 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative h-[500px] md:h-[900px] w-full md:w-[700px] flex items-end justify-center -mt-[480px] md:-mt-80 -translate-y-27 translate-x-33 md:translate-y-0 md:translate-x-0 rotate-0 md:rotate-[-2deg]"
                        >
                            <motion.img
                                src="https://framerusercontent.com/images/7fNQma73T88BJXYHotHpLQVe2tw.png?scale-down-to=1024&width=1184&height=864"
                                alt="Portrait"
                                initial={{ filter: 'grayscale(100%) brightness(0)' }}
                                whileInView={{ filter: 'grayscale(0%) brightness(1)' }}
                                transition={{
                                    filter: { delay: 1, duration: 1, ease: "easeInOut" }
                                }}
                                viewport={{ once: true }}
                                className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
                            />
                        </motion.div>

                    </div>
                </div>
            </div>


        </section>
    );
};

export default Contact;
