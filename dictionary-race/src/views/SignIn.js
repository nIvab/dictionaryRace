import React from "react";
import { motion } from "framer-motion";
import pageVariants, { pageTransition } from "../utilities/pageVariants";

const SignIn = () => {
    return (
        <motion.div
            className="SignIn"
            initial="initial"
            animate="in"
            exit="in"
            variants={pageVariants}
            transition={pageTransition}
        >
            Sign in Stuff!
        </motion.div>
    );
};

export default SignIn;
