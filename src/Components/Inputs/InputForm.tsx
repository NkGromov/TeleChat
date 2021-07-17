import React from "react";
import { IinputForm } from "../../Types/Inputs";
import { Name } from "../ChatsList/ChatsListStyle";
import Input from "./Input";
import { InputWrapper } from "./InputStyle";

const InputFrom: React.FC<IinputForm> = ({ name, type, nameInp, value, height, onChange }) => {
    return (
        <InputWrapper>
            <Name size="14px">{name}</Name>
            <Input value={value} onChange={onChange} type={type} name={nameInp} height={height ? height : "40px"} />
        </InputWrapper>
    );
};

export default InputFrom;
