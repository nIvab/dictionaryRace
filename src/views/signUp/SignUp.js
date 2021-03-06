import React, { useContext } from "react";
import { motion } from "framer-motion";
import pageVariants, {
    pageTransition,
    childVariants,
} from "../../utilities/pageVariants";
import UserContext from "../../UserContext";
import { Redirect, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUp.css";

const SignUp = () => {
    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {};

    if (user !== null) {
        <Redirect to="/menu" />;
    } else {
        return (
            <>
                <h1>Sign Up</h1>
                <motion.div
                    className="SignIn"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        className="SignInForm"
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={childVariants}
                        transition={pageTransition}
                    >
                        <motion.p
                            className="Name"
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={childVariants}
                            transition={pageTransition}
                        >
                            Name
                        </motion.p>
                        <motion.input
                            name="Name"
                            defaultValue="Joe Bloe"
                            ref={register({ required: true })}
                            className="NameField"
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={childVariants}
                            transition={pageTransition}
                        />
                        <motion.p
                            className="Email"
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={childVariants}
                            transition={pageTransition}
                        >
                            Email
                        </motion.p>
                        <motion.input
                            name="email"
                            defaultValue="example@domain.com"
                            ref={register({ required: true })}
                            className="EmailField"
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={childVariants}
                            transition={pageTransition}
                        />
                        <motion.p
                            className="password"
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={childVariants}
                            transition={pageTransition}
                        >
                            Password
                        </motion.p>
                        <motion.input
                            name="passwordField"
                            defaultValue="Password"
                            ref={register({ required: true })}
                            className="PasswordField"
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={childVariants}
                            transition={pageTransition}
                        />
                        <motion.input
                            name="submitSignUp"
                            className="submit"
                            type="submit"
                            onClick={handleSubmit(onSubmit)}
                        />
                    </motion.form>
                    Or if you don't have an account already,{" "}
                    <Link to="/sign-up">sign up</Link>
                </motion.div>
            </>
        );
    }
};

export default SignUp;
