import React from "react";
import { motion } from "framer-motion";

import "./DictionaryCard.css";

const DictionaryCard = ({ clickHandle, title, defn }) => {
    /*  displays the card containing the appropriate word(title) and an 
 array, seperated via white space, of the definition of the word(defn)*/
    console.log(title, defn);
    return (
        <motion.div className="dictionaryCardContainer">
            <h3 className="cardTitle">{title}</h3>
            <p className="definition">
                {defn.map((word) => {
                    return (
                        <p onClick={clickHandle} class="words">
                            {word}
                        </p>
                    );
                })}
            </p>
        </motion.div>
    );
};

export default DictionaryCard;
