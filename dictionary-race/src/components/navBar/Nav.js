import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navBar">
            <Link to="/">
                <h3>Play</h3>
            </Link>
            <Link to="/menu">
                <h3>Menu</h3>
            </Link>
            <Link to="/sign-in">
                <h3>Sign-in</h3>
            </Link>
        </div>
    );
};

export default Nav;
