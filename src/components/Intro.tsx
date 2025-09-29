import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

type IntroProps = {
    onFinish?: () => void;
};

export default function Intro({ onFinish }: IntroProps) {
    const [showIntro, setShowIntro] = useState(true);

    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const finishTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        hideTimer.current = setTimeout(() => setShowIntro(false), 2500);
        finishTimer.current = setTimeout(() => onFinish?.(), 3500);

        return () => {
            if (hideTimer.current) clearTimeout(hideTimer.current);
            if (finishTimer.current) clearTimeout(finishTimer.current);
        };
    }, [onFinish]);

    return (
        <AnimatePresence>
            {showIntro && (
                <motion.div
                    className="intro-overlay"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        backgroundColor: "black",
                        zIndex: 9999,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    {/* X - буква */}
                    <motion.div
                        className="x-letter"
                        initial={{
                            scale: 0.5,
                            opacity: 0,
                            rotate: -180
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            rotate: 0
                        }}
                        transition={{
                            duration: 1.2,
                            ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                        style={{
                            fontSize: "clamp(80px, 20vw, 200px)",
                            fontWeight: 900,
                            color: "white",
                            position: "absolute",
                            fontFamily: "'Inter', sans-serif",
                        }}
                    >
                        X
                    </motion.div>

                    {/* O - буква с эффектом заполнения */}
                    <motion.div
                        className="o-letter"
                        initial={{
                            scale: 0,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1.2,
                            opacity: 1
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 1,
                            ease: "easeOut"
                        }}
                        style={{
                            fontSize: "clamp(60px, 15vw, 150px)",
                            fontWeight: 900,
                            color: "white",
                            position: "absolute",
                            fontFamily: "'Inter', sans-serif",
                        }}
                    >
                        O
                    </motion.div>

                    {/* Эффект пульсации */}
                    <motion.div
                        className="pulse-effect"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 1 }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                        style={{
                            position: "absolute",
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            border: "2px solid rgba(255, 255, 255, 0.3)",
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}