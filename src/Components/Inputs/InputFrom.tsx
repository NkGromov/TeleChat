import React from "react";
import { Name } from "../ChatsList/ChatsListStyle";
import Input from "./Input";
import { InputWrapper } from "./InputStyle";
type props = {
    name: string;
    type: string;
    value: string;
    nameInp: string;
    color: string;
    onChange: any;
};
const InputFrom: React.FC<props> = ({ name, type, nameInp, value, onChange }) => {
    return (
        <InputWrapper>
            <Name size="14px">{name}</Name>
            <Input value={value} onChange={onChange} type={type} name={nameInp} color="#fff" />
        </InputWrapper>
    );
};

export default InputFrom;
