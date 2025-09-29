import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

type IntroProps = {
    onFinish?: () => void; // делаем необязательным
};

export default function Intro({ onFinish }: IntroProps) {
    const [showIntro, setShowIntro] = useState(true);
    const finishTimer = useRef<NodeJS.Timeout | null>(null); // сохраняем таймер в ref
    const hideTimer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        hideTimer.current = setTimeout(() => setShowIntro(false), 2000); // показываем интро 2с
        finishTimer.current = setTimeout(() => onFinish?.(), 4000); // после 4с вызываем onFinish

        return () => {
            if (hideTimer.current) clearTimeout(hideTimer.current);
            if (finishTimer.current) clearTimeout(finishTimer.current);
        };
    }, [onFinish]);

    return (
        <AnimatePresence>
            {showIntro && (
                <motion.div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "black",
                        overflow: "hidden",
                        zIndex: 50,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* X */}
                    <motion.div
                        style={{
                            fontSize: "2rem",
                            fontWeight: 750,
                            color: "white",
                            position: "absolute",
                        }}
                        initial={{ scale: 0.1, opacity: 0 }}
                        animate={{ scale: 350, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    >
                        X
                    </motion.div>

                    {/* O */}
                    <motion.div
                        style={{
                            fontSize: "2rem",
                            fontWeight: 900,
                            color: "black",
                            position: "absolute",
                        }}
                        initial={{ scale: 25, opacity: 0 }}
                        animate={{ scale: 250, opacity: 1 }}
                        transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                    >
                        O
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
