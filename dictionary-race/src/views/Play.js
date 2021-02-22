import React from "react";
import { motion } from "framer-motion";
import pageVariants, { pageTransition } from "../utilities/pageVariants";

const Play = () => {
    return (
        <motion.div
            className="Play"
            initial="initial"
            animate="in"
            exit="in"
            variants={pageVariants}
            transition={pageTransition}
        >
            Play Stuff!
        </motion.div>
    );
};

export default Play;
