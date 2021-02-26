import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";

//Components
import DictionaryCard from "../components/dictionaryCard/DictionaryCard";
import CircleThingy from "../components/circleThingy/CircleThingy";
import pageVariants, {
    pageTransition,
    cardVariants,
} from "../utilities/pageVariants";

import dictionaryAPIcall from "../utilities/dictionaryAPIcall";

import "./Play.css";

const Play = () => {
    const [wordArr, setWordArr] = useState([]);
    const [wordDefn, setWordDefn] = useState([]);
    const [finalWord, setFinalWord] = useState("");
    const [endgame, setEndgame] = useState(false);

    // react hook form implementation
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        //set Final word
        setFinalWord(data.finalWord.replace(/[^A-Za-z0-9]/g, ""));

        //now we only deal with inital word
        data = data.initalWord.replace(/[^A-Za-z0-9]/g, "");
        console.log("what the hell", data);
        console.log("onSubmit Called");

        // Ensure that WordArr is updated
        let temp = wordArr;
        temp.push(data);
        setWordArr(temp);

        // Generate definitions for Dictionary Card

        let definitions = await dictionaryAPIcall(data);
        let temp2 = await wordDefn;
        let splitted = await definitions.map((defn) => {
            return defn.split(" ");
        });
        await temp2.push({
            word: data,
            definition: splitted,
        });
        await setWordDefn(temp2);
        await console.log("THE OBJECTS", wordDefn);
    };

    const handleWordClick = async (data) => {
        console.log("onSubmit Called", data);
        data = data.replace(/[^A-Za-z0-9]/g, "");
        // Ensure that WordArr is updated
        let temp = wordArr;
        temp.push(data);
        setWordArr(temp);

        // check if game over
        if (wordArr[wordArr.length - 1] == finalWord) {
            setEndgame(true);
        }
        // Generate definitions for Dictionary Card

        let definitions = await dictionaryAPIcall(data);
        let temp2 = await wordDefn;
        let splitted = await definitions.map((defn) => {
            return defn.split(" ");
        });
        // await temp2.push({
        //     word: data,
        //     definition: splitted,
        // });
        await setWordDefn([...wordDefn, { word: data, definition: splitted }]);
        await console.log("THE OBJECTS", wordDefn);
    };
    useEffect(() => {}, [wordDefn]);
    return (
        <>
            <Popup trigger={endgame}>
                <div>
                    Congrats, you have solved the run from {wordArr[0]} to
                    {wordArr[wordArr.length - 1]} in {wordArr.length} words!
                </div>
            </Popup>
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
                {wordDefn.map((obj) => {
                    // take array and map it to dictionary card
                    let word = obj.word;
                    let definitions = obj.definition;
                    return (
                        <DictionaryCard
                            clickHandle={handleWordClick}
                            title={word}
                            defn={definitions}
                        />
                    );
                })}
            </motion.div>
        </>
    );
};

export default Play;
