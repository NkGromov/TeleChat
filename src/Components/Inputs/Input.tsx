import React from "react";
import { Iinput } from "../../Types/Inputs";
import { Inp } from "./InputStyle";

const Input: React.FC<Iinput> = ({ type, value, name, color, height, onChange }) => {
    return <Inp type={type} name={name} value={value} color={color} onChange={onChange} height={height} />;
};

export default Input;
