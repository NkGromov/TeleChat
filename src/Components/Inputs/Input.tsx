import React from "react";
import { Inp } from "./InputStyle";

type props = {
    type: string;
    value: string;
    name: string;
    color: string;
    onChange: any;
};
const Input: React.FC<props> = ({ type, value, name, color, onChange }) => {
    return <Inp type={type} name={name} value={value} color={color} onChange={onChange} />;
};

export default Input;
