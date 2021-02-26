import React from "react";
import { motion } from "framer-motion";

import dictionaryAPIcall from "../../utilities/dictionaryAPIcall";
import "./DictionaryCard.css";

const DictionaryCard = ({ clickHandle, title, defn }) => {
    /*  displays the card containing the appropriate word(title) and an 
 array, seperated via white space, of the definition of the word(defn)*/
    console.log("DEFN IN DICTCARD", defn);
    return (
        <motion.div className="dictionaryCardContainer">
            <h3 className="cardTitle">{title}</h3>
            <ol className="definition">
                {defn.map((definiton) => {
                    return (
                        <li className="listDefn">
                            {" "}
                            {definiton.map((word) => {
                                return (
                                    <span
                                        onClick={clickHandle}
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
