
const HeroBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none w-full h-full overflow-hidden select-none touch-none">
            <img
                src="https://raw.githubusercontent.com/KY3B3D/shadows/main/860shots_so.png"
                alt="Overlay"
                draggable="false"
                style={{
                    width: '100%',
                    height: '140%',
                    objectFit: 'cover',
                    opacity: 0.16,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}
            />
            <img
                src="https://raw.githubusercontent.com/KY3B3D/shadows/main/552shots_so.png"
                alt="Noise"
                draggable="false"
                style={{
                    width: '100%',
                    height: '140%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    objectFit: 'cover',
                    opacity: 0.03,
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}
            />
        </div>
    );
};

export default HeroBackground;
