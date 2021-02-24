import React from "react";
import { motion } from "framer-motion";
import pageVariants, {
    pageTransition,
    childVariants,
} from "../utilities/pageVariants";
import "./HowToPlay.css";
const HowToPlay = () => {
    return (
        <motion.div
            className="HowToPlay"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <h1 className="HTPtitle">How to Play</h1>
            <div className="textBlock">
                <p>
                    So have you heard of{" "}
                    <a href="https://en.wikipedia.org/wiki/Wikipedia:Wikirace">
                        {" "}
                        WikiRace{" "}
                    </a>
                    ? Dictionary Race has the same premise, but with words in
                    the dictionary!
                </p>
                <p>
                    {" "}
                    You must input two words, a inital and final word. From
                    there you will be presented with the definition of the
                    initial word - you may click on each of the words found in
                    the definition to bring up its own definition! It is up to
                    you to find the final word by traversing a chain of selected
                    words!
                </p>

                <p>
                    If you wish to save a particular run, you may do so by
                    signing in! By doing so you also allow your runs to be
                    publically visible! Which is great for showing up your
                    friends by beating their time on their own runs!
                </p>
            </div>
        </motion.div>
    );
};

export default HowToPlay;
