import React, { useEffect, useRef} from "react";
import { motion, useInView, useAnimation } from "framer-motion"

export const Reveal = ({ children, width}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const mainControl = useAnimation();
    const colorControl = useAnimation();

    useEffect(() => {
        if(isInView) {
            // Animate Children
            mainControl.start("show");
            colorControl.start("show");
        }
    }, [isInView])
    return (
        <div ref={ref} style={{position: "relative",}}>
            {/* Animation for Reveal in View */}
            <motion.div
            variants={{
                hidden: {opacity: 0, y: 75 },
                show: { opacity: 1, y: 0},
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            {/* Animation for Back Color */}
            <motion.div 
                variants={{
                    hidden: { left: 0 },
                    show: { left: "100%" },
                }}
                initial = "hidden"
                animate = {colorControl}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "var(--brand)",
                    zIndex: 20,
                }}
            />
        </div>
    );
};
