import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { AppStateType } from "../../Redux/store";
import { UserActions } from "../../Redux/UserReducer";
import InputWithName from "../Inputs/InputWithName";
import { ModalButton, ModalForm } from "../Modal/ModalStyle";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const errors = useSelector((state: AppStateType) => state.UserReducer.errors.registration?.message);
    const registrationSchema = Yup.object().shape({
        login: Yup.string().required("Обязательное  поле"),
        password: Yup.string().required("Обязательное  поле"),
        passwordTwo: Yup.string().required("Обязательное  поле"),
    });
    const registration = useFormik({
        initialValues: {
            login: "",
            password: "",
            passwordTwo: "",
        },
        validationSchema: registrationSchema,
        onSubmit: ({ login, password, passwordTwo }) => {
            dispatch(UserActions.registration(login, password, passwordTwo));
        },
    });
    return (
        <ModalForm onSubmit={registration.handleSubmit}>
            <InputWithName
                onBlur={registration.handleBlur}
                value={registration.values.login}
                onChange={registration.handleChange}
                name="Имя"
                nameInp="login"
                errors={(registration.touched.login && registration.errors.login) || errors}
            />
            <InputWithName
                onBlur={registration.handleBlur}
                value={registration.values.password}
                onChange={registration.handleChange}
                name="Пароль"
                type="password"
                nameInp="password"
                errors={(registration.touched.password && registration.errors.password) || errors}
            />
            <InputWithName
                onBlur={registration.handleBlur}
                value={registration.values.passwordTwo}
                onChange={registration.handleChange}
                name="Пароль"
                type="password"
                nameInp="passwordTwo"
                errors={(registration.touched.passwordTwo && registration.errors.passwordTwo) || errors}
            />
            <ModalButton type="submit" disabled={registration.errors.login || registration.errors.password || registration.errors.passwordTwo ? true : false}>
                Регистация
            </ModalButton>
        </ModalForm>
    );
};

export default RegistrationForm;
