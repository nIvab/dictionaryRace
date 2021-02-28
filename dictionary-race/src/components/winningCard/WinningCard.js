import React from "react";
import { motion } from "framer-motion";

import pageVariants, {
    pageTransition,
    childVariants,
    cardVariants,
} from "../../utilities/pageVariants";
import "./WinningCard.css";

const WinningCard = ({ arrOfWords }) => {
    const pluralOrNot = (arr) => {
        if (arr.length - 1 == 1) {
            return "word!";
        } else {
            return "words!";
        }
    };
    return (
        <>
            <motion.div
                className="WinningCard"
                initial="initial"
                animate="in"
                exit="out"
                variants={childVariants}
                transition={pageTransition}
            >
                <h3 className="Header">Success!</h3>
                <div>
                    You have completed the run from <i>{arrOfWords[0]}</i> to{" "}
                    <i>{arrOfWords[arrOfWords.length - 1] + " "}</i>
                    in {arrOfWords.length - 1} {pluralOrNot(arrOfWords)}
                </div>
            </motion.div>
        </>
    );
};

export default WinningCard;
