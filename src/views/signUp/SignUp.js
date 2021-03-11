import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import pageVariants, {
    pageTransition,
    childVariants,
} from "../../utilities/pageVariants";
import UserContext from "../../UserContext";
import { Redirect, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./SignUp.css";
import signUp from "../../utilities/auth/auth";

const SignUp = () => {
    const alertStyle = {
        display: "inline",
        color: "red",
        marginLeft: "10px",
        fontSize: "10pt",
    };

    const { user, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const [unmatchingPass, setUnmatching] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setUnmatching(false);
        if (data.passwordField !== data.ConfirmPasswordField) {
            setUnmatching(true);
        }
        if (!data.email.includes("@")) {
            setInvalidEmail(true);
        } else {
            signUp(data.Name, data.email, data.passwordField);
            <Redirect to="/thank-you" />;
        }
    };

    if (user === null) {
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
                            UserName
                        </motion.p>
                        <motion.input
                            name="Name"
                            defaultValue="JoeishBloeish"
                            ref={register({ required: true })}
                            className="NameField"
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={childVariants}
                            transition={pageTransition}
                        />
                        {invalidEmail && <motion.p></motion.p>}
                        <motion.p
                            className="Email"
                            initial="initial"
                            animate="in"
                            exit="out"
                            variants={childVariants}
                            transition={pageTransition}
                        >
                            Email
                            {invalidEmail && (
                                <motion.p style={alertStyle}>
                                    Please enter a valid email
                                </motion.p>
                            )}
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
                            {unmatchingPass && (
                                <motion.p style={alertStyle}>
                                    Passwords must match
                                </motion.p>
                            )}
                        </motion.p>
                        <motion.input
                            name="passwordField"
                            defaultValue="Password"
                            ref={register({ required: true })}
                            className="PasswordField"
                            initial="initial"
                            type="password"
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
                            Confirm Password
                            {unmatchingPass && (
                                <motion.p style={alertStyle}>
                                    Passwords must match
                                </motion.p>
                            )}
                        </motion.p>

                        <motion.input
                            name="ConfirmPasswordField"
                            defaultValue="Password"
                            ref={register({ required: true })}
                            className="PasswordField"
                            initial="initial"
                            type="password"
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
                    Or if an account already, <Link to="/sign-in">sign in</Link>
                </motion.div>
            </>
        );
    } else {
        <Redirect to="/" />;
    }
};

export default SignUp;
