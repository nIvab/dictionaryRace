import React from "react";
import { motion } from "framer-motion";

import "./DictionaryCard.css";
import pageVariants, {
    pageTransition,
    childVariants,
    cardVariants,
} from "../../utilities/pageVariants";

const DictionaryCard = ({ clickHandle, title, defn, clickable, delCard }) => {
    /*  displays the card containing the appropriate word(title) and an 
 array, seperated via white space, of the definition of the word(defn)*/
    const passOnWordClick = (event) => {
        let text = event.currentTarget.textContent;
        clickHandle(text);
    };
    const removeHandler = () => {
        delCard(title, defn);
    };
    console.log("DEFN IN DICTCARD", defn);
    if (clickable == true) {
        return (
            <motion.div
                className="dictionaryCardContainer"
                initial="initial"
                animate="in"
                exit="out"
                variants={childVariants}
                transition={pageTransition}
            >
                <div className="headContainer">
                    <h3 className="cardTitle">{title}</h3>
                    <button onClick={removeHandler} className="remove">
                        X
                    </button>
                </div>
                <ol className="definition">
                    {defn.map((definiton, index) => {
                        return (
                            <li className="listDefn" key={index}>
                                {" "}
                                {definiton.map((word, wordIndex) => {
                                    return (
                                        <span
                                            onClick={passOnWordClick}
                                            className="words"
                                            key={wordIndex}
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
    } else {
        return (
            <motion.div
                className="dictionaryCardContainer"
                initial="initial"
                animate="in"
                exit="out"
                variants={childVariants}
                transition={pageTransition}
            >
                <div className="headContainer">
                    <h3 className="cardTitle">{title}</h3>
                    <button onClick={removeHandler} className="remove">
                        X
                    </button>
                </div>
                <ol className="definition">
                    {defn.map((definiton, index) => {
                        return (
                            <li className="listDefn" key={index}>
                                {" "}
                                {definiton.map((word, wordIndex) => {
                                    return (
                                        <span className="words" key={wordIndex}>
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
    }
};

export default DictionaryCard;
