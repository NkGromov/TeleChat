import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import TextAreaInput from "../Inputs/TextArea";
type props = {
    isActive: boolean;
};
const ChatForm: React.FC<props> = ({ isActive }) => {
    const dispatch = useDispatch();
    const chat = useFormik({
        initialValues: {
            input: "",
        },
        onSubmit: ({ input }) => {},
    });
    return <TextAreaInput name="input" value={chat.values.input} color="transparent" onChange={chat.handleChange} isActive={isActive} />;
};

export default ChatForm;
