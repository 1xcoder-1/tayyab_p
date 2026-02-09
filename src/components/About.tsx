import { useRef } from 'react';
import { motion } from 'framer-motion';
import AboutContent from './About UI/AboutContent';


const About = () => {
    const sectionRef = useRef<HTMLElement>(null);


    return (
        <section
            ref={sectionRef}
            className="relative w-full z-20 [clip-path:polygon(0_6vw,100%_0,100%_94%,0_100%)] md:[clip-path:polygon(0_14vw,100%_0,100%_85%,0_100%)]"
            id="about"
            style={{
                marginTop: '-15vw',
                paddingTop: '25vw',
                paddingBottom: '12rem',
                background: 'radial-gradient(91% 104% at 6.7% 3.4%, #352842 0%, #0D0219 100%)'
            }}
        >
            {/* Background Text Entrance */}
            <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none select-none">
                <motion.span
                    initial={{ opacity: 0, y: 30, rotate: -7 }}
                    whileInView={{ opacity: 0.04, y: 0, rotate: -9 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
                    className="text-[23vw] font-black text-white whitespace-nowrap leading-none tracking-[0.05em] uppercase"
                    style={{
                        fontWeight: 900
                    }}
                >
                    ABOUT
                </motion.span>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[51%]  z-10 [clip-path:polygon(0_41%,100%_0,100%_100%,0_100%)] pointer-events-none" style={{ background: 'radial-gradient(91% 104% at 6.7% 3.4%, #352446ff 0%, #0D0219 100%)' }} />

            <AboutContent />
        </section >
    );
};

export default About;
