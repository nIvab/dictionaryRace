import React from "react";
import { motion } from "framer-motion";
import pageVariants, { pageTransition } from "../utilities/pageVariants";

const Menu = () => {
    return (
        <motion.div
            className="Menu"
            initial="initial"
            animate="in"
            exit="in"
            variants={pageVariants}
            transition={pageTransition}
        >
            Menu Stuff!
        </motion.div>
    );
};

export default Menu;
