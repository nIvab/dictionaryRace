import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => {
    return (
        <div className="navBar">
            <Link className="links" to="/">
                Play
            </Link>

            <Link className="links" to="/menu">
                Menu
            </Link>

            <Link className="links" to="/sign-in">
                Sign-in
            </Link>
        </div>
    );
};

export default Nav;
