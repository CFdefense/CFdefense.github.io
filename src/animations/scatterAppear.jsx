// src/animations/ScatterAppear.jsx
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const ScatterAppear = ({ children, delay }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const control = useAnimation();

    useEffect(() => {
        if (isInView) {
            control.start("show");
        }
    }, [isInView, control]);

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    show: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.85, delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};
