import React from "react";
import { IinputForm } from "../../Types/Inputs";
import { Name } from "../ChatList/ChatListStyle";
import { Error, Input, InputWrapper } from "./InputStyle";

const InputWithName: React.FC<IinputForm> = ({ name, type, nameInp, value, height, errors, onBlur, onChange }) => {
    return (
        <InputWrapper>
            <Name size="14px">{name}</Name>
            <Input value={value} onChange={onChange} onBlur={onBlur} type={type} name={nameInp} height={height ? height : "40px"} error={errors ? true : false} />
            {errors && <Error>{errors}</Error>}
        </InputWrapper>
    );
};

export default InputWithName;
