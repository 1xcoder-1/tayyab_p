import { motion, useTransform } from 'framer-motion';

const Word = ({ children, progress, range, highlightColor }: { children: string, progress: any, range: [number, number], highlightColor: string }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <span className="relative">
            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity }} className={highlightColor}>
                {children}
            </motion.span>
        </span>
    );
};

export default Word;
