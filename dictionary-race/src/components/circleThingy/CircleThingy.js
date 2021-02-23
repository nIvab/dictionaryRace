import React from "react";
import "./CircleThingy.css";

const CircleThingy = (text) => {
    return (
        <div className="outerCircle">
            <div className="innerCircle">
                {" "}
                <p className="text"> text </p>{" "}
            </div>
        </div>
    );
};

export default CircleThingy;
