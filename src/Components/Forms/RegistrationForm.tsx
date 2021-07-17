import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { UserActions } from "../../Redux/UserReducer";
import InputForm from "../Inputs/InputForm";
import { ModalButton, ModalForm } from "../Modal/ModalStyle";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const registration = useFormik({
        initialValues: {
            login: "",
            password: "",
            passwordTwo: "",
        },
        onSubmit: ({ login, password, passwordTwo }) => {
            dispatch(UserActions.registration(login, password, passwordTwo));
        },
    });
    return (
        <ModalForm onSubmit={registration.handleSubmit}>
            <InputForm value={registration.values.login} onChange={registration.handleChange} name="Имя" nameInp="login" />
            <InputForm value={registration.values.password} onChange={registration.handleChange} name="Пароль" type="password" nameInp="password" />
            <InputForm value={registration.values.passwordTwo} onChange={registration.handleChange} name="Пароль" type="password" nameInp="passwordTwo" />
            <ModalButton type="submit">Регистация</ModalButton>
        </ModalForm>
    );
};

export default RegistrationForm;
