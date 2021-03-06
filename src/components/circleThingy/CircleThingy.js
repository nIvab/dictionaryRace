import React from "react";
import "./CircleThingy.css";

const CircleThingy = (text) => {
    return (
        <div className="outerCircle">
            <div className="innerCircle">
                {" "}
                <p className="text"> Dictionary </p>{" "}
                <p className="text2">
                    <i class="fas fa-running"></i> Run
                </p>
            </div>
        </div>
    );
};

export default CircleThingy;
