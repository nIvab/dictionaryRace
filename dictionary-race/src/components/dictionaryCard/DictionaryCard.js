import React from "react";
import { motion } from "framer-motion";

import dictionaryAPIcall from "../../utilities/dictionaryAPIcall";
import "./DictionaryCard.css";
import pageVariants, {
    pageTransition,
    childVariants,
    cardVariants,
} from "../../utilities/pageVariants";

const DictionaryCard = ({ clickHandle, title, defn }) => {
    /*  displays the card containing the appropriate word(title) and an 
 array, seperated via white space, of the definition of the word(defn)*/
    const passOnWordClick = (event) => {
        let text = event.currentTarget.textContent;
        clickHandle(text);
    };

    console.log("DEFN IN DICTCARD", defn);
    return (
        <motion.div
            className="dictionaryCardContainer"
            initial="initial"
            animate="in"
            exit="out"
            variants={childVariants}
            transition={pageTransition}
        >
            <h3 className="cardTitle">{title}</h3>
            <ol className="definition">
                {defn.map((definiton) => {
                    return (
                        <li className="listDefn">
                            {" "}
                            {definiton.map((word) => {
                                return (
                                    <span
                                        onClick={passOnWordClick}
                                        className="words"
                                    >
                                        {word}
                                    </span>
                                );
                            })}
                        </li>
                    );
                })}
            </ol>
        </motion.div>
    );
};

export default DictionaryCard;
