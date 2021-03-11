import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../UserContext";
import "./nav.css";
const Nav = () => {
    return (
        <div className="navBar">
            <Link className="links" to="/">
                Play
            </Link>

            <Link className="links" to="/how-to-play">
                How to Play
            </Link>
            <Link className="links" to="/sign-in">
                Sign-in
            </Link>
        </div>
    );
};

export default Nav;
