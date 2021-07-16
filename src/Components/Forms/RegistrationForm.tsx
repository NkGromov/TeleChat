import { useFormik } from "formik";
import React from "react";
import InputFrom from "../Inputs/InputFrom";
import { ModalButton, ModalForm } from "../Modal/ModalStyle";

const RegistrationForm = () => {
    const registration = useFormik({
        initialValues: {
            login: "",
            password: "",
            passwordTwo: "",
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
            console.log("object");
        },
    });
    return (
        <ModalForm>
            <InputFrom value={registration.values.login} onChange={registration.handleChange} name="Имя" type="text" nameInp="login" color="#fff" />
            <InputFrom value={registration.values.password} onChange={registration.handleChange} name="Пароль" type="password" nameInp="password" color="#fff" />
            <InputFrom value={registration.values.passwordTwo} onChange={registration.handleChange} name="Пароль" type="password" nameInp="passwordTwo" color="#fff" />
            <ModalButton type="submit">Регистация</ModalButton>
        </ModalForm>
    );
};

export default RegistrationForm;
