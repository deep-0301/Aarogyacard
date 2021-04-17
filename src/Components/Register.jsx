import React, { useState } from "react";
import RegisterDr from './RegisterDr'
import RegisterPr from "./RegisterPr";
import "./Register.css";

const Register = () => {
    var [isDoctor, setIsDoctor] = useState(true);
    const handleClick = (e) => {
        if (e.target.getAttribute("name") === "Doctor") {
            console.log(e.target.getAttribute("name"));
            setIsDoctor(true);
        }
        else {
            setIsDoctor(false);
        }
    };
    return isDoctor ? (
        <RegisterDr handleClick={handleClick} />
    )
        :
        (
            <RegisterPr handleClick={handleClick} />
        );
};

export default Register
