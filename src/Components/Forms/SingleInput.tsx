import { useFormik } from "formik";
import React from "react";
import Input from "../Inputs/Input";
type props = {
    color?: string;
    type?: string;
    height?: string;
};
const SingleInput: React.FC<props> = ({ type, color, height }) => {
    const single = useFormik({
        initialValues: {
            input: "",
        },
        onSubmit: (values) => {},
    });
    return <Input type={type} value={single.values.input} color={color} name="input" onChange={single.handleChange} height={height}></Input>;
};

export default SingleInput;
