import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

//Components
import DictionaryCard from "../components/dictionaryCard/DictionaryCard";

import pageVariants, {
    pageTransition,
    cardVariants,
} from "../utilities/pageVariants";

//components
import CircleThingy from "../components/circleThingy/CircleThingy";

import "./Play.css";

const Play = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    const [gameArr, setGameArr] = useState([]);

    const handleWordClick = (word) => {
        let temp = gameArr;
        temp.push(word);
        setGameArr(temp);
    };

    return (
        <>
            <motion.div
                className="Play"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <h1>Play</h1>
                <CircleThingy text={"Hello!"} />

                <motion.div
                    className="inputCard"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={cardVariants}
                    transition={pageTransition}
                >
                    <motion.form onSubmit={handleSubmit(onSubmit)}>
                        <h3>Enter Inital Word</h3>
                        <motion.input
                            name="initalWord"
                            ref={register}
                            placeholder="Inital"
                            className="typed"
                        />
                        <h3>Enter Final Word</h3>
                        <motion.input
                            name="finalWord"
                            ref={register}
                            placeholder="Final"
                            className="typed"
                        />

                        <motion.input type="submit" id="submit" value="Begin" />
                    </motion.form>
                </motion.div>
                <DictionaryCard
                    handleSubmit={handleWordClick}
                    title={"Hello"}
                    defn={[
                        "yes ",
                        "hi ",
                        "boobs",
                        "420 ",
                        "good ",
                        "dipshit ",
                        "fuckass ",
                        "shitter ",
                        "headass ",
                        "dong ",
                    ]}
                />
            </motion.div>
        </>
    );
};

export default Play;
