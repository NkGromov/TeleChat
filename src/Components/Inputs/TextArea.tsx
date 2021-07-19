import { useEffect, useRef } from "react";
import { TextArea } from "../../Types/Inputs";
import { Area } from "./InputStyle";

const TextAreaInput: React.FC<TextArea> = ({ name, value, color, onChange, isActive }) => {
    const inputAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (isActive) inputAreaRef.current?.focus();
    }, [isActive]);
    return <Area ref={inputAreaRef} name={name} value={value} color={color} onChange={onChange} />;
};

export default TextAreaInput;
