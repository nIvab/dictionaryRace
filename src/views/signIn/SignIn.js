import React, { useContext } from "react";
import { motion } from "framer-motion";
import pageVariants, {
    pageTransition,
    childVariants,
} from "../../utilities/pageVariants";
import UserContext from "../../UserContext";
import { Redirect, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignIn.css";

const SignIn = () => {
    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {};

    if (user !== null) {
        <Redirect to="/menu" />;
    } else {
        return (
            <>
                <h1>Sign In</h1>
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
                            name="submitButton"
                            className="submit"
                            type="submit"
                            onClick={handleSubmit(onSubmit)}
                        />
                    </motion.form>
                    <span className="redirectSignUp">
                        Or if you don't have an account already,{" "}
                        <Link to="/sign-up" className="link">
                            sign up
                        </Link>{" "}
                    </span>
                </motion.div>
            </>
        );
    }
};

export default SignIn;
