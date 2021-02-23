import React from "react";
import { motion } from "framer-motion";
import pageVariants, {
    pageTransition,
    childVariants,
} from "../utilities/pageVariants";

const Menu = () => {
    return (
        <motion.div
            className="Menu"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <motion.div variants={childVariants}>Menu1</motion.div>
            <motion.div variants={childVariants}>Menu2</motion.div>
        </motion.div>
    );
};

export default Menu;
