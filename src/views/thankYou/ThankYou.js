import React from "react";
import { motion } from "framer-motion";
import pageVariants, {
    pageTransition,
    childVariants,
} from "../../utilities/pageVariants";
import { Link } from "react-router-dom";

const ThankYou = () => {
    return (
        <motion.div
            className="HowToPlay"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <h1 className="HTPtitle">Thank you for signing up!</h1>
            <div className="textBlock">
                <p>
                    Please <Link to="/sign-in"> sign in </Link> to start saving
                    your runs!
                </p>
            </div>
        </motion.div>
    );
};

export default ThankYou;
