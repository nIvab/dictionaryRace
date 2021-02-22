import React from "react";
import { motion } from "framer-motion";
import pageVariants, { pageTransition } from "../utilities/pageVariants";

const SearchMenu = () => {
    return (
        <motion.div
            className="SearchMenu"
            initial="initial"
            animate="in"
            exit="in"
            variants={pageVariants}
            transition={pageTransition}
        >
            className="SearchMenu"
        </motion.div>
    );
};

export default SearchMenu;
