import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { UserActions } from "../../Redux/UserReducer";
import InputForm from "../Inputs/InputForm";
import { ModalButton, ModalForm } from "../Modal/ModalStyle";

const LoginForm = () => {
    const dispatch = useDispatch();
    const login = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        onSubmit: ({ login, password }) => {
            dispatch(UserActions.login(login, password));
        },
    });
    return (
        <ModalForm onSubmit={login.handleSubmit}>
            <InputForm value={login.values.login} onChange={login.handleChange} name="Имя" nameInp="login" />
            <InputForm value={login.values.password} onChange={login.handleChange} name="Пароль" type="password" nameInp="password" />
            <ModalButton type="submit">Войти</ModalButton>
        </ModalForm>
    );
};

export default LoginForm;
