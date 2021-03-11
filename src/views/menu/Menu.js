import React, { useContext } from "react";
import { motion } from "framer-motion";
import pageVariants, {
    pageTransition,
    childVariants,
} from "../../utilities/pageVariants";
import UserContext from "../../UserContext";
import { Redirect, Link } from "react-router-dom";

const Menu = () => {
    const { user, setUser } = useContext(UserContext);
    console.log("THE USER", user);
    //if User signed in show the menu ELSE redirect to signin menu
    if (user !== null) {
        return (
            <motion.div
                className="Menu"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
            >
                <motion.div variants={childVariants}>Menu1</motion.div>
                <motion.div variants={childVariants}>Menu2</motion.div>
            </motion.div>
        );
    } else {
        return <Redirect to="/sign-in" />;
    }
};

export default Menu;
