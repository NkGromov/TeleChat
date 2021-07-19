import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { UserActions } from "../../Redux/UserReducer";
import Input from "../Inputs/Input";
type props = {
    color?: string;
    type?: string;
    height?: string;
};
const SearchForm: React.FC<props> = ({ type, color, height }) => {
    const dispatch = useDispatch();
    const single = useFormik({
        initialValues: {
            input: "",
        },
        onSubmit: ({ input }) => {
            if (input === "") dispatch(UserActions.setFindUsers([]));
            else dispatch(UserActions.findUsers(input));
        },
    });
    return (
        <Input
            type={type}
            value={single.values.input}
            color={color}
            name="input"
            onChange={(e) => {
                single.handleChange(e);
                single.submitForm();
            }}
            height={height}
        ></Input>
    );
};

export default SearchForm;
