import { useFormik } from "formik";
import React from "react";
import InputFrom from "../Inputs/InputFrom";
import { ModalButton, ModalForm } from "../Modal/ModalStyle";

const LoginForm = () => {
    const login = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log("object");
        },
    });
    return (
        <ModalForm>
            <InputFrom value={login.values.login} onChange={login.handleChange} name="Имя" type="text" nameInp="login" color="#fff" />
            <InputFrom value={login.values.password} onChange={login.handleChange} name="Пароль" type="password" nameInp="password" color="#fff" />
            <ModalButton type="submit">Войти</ModalButton>
        </ModalForm>
    );
};

export default LoginForm;
