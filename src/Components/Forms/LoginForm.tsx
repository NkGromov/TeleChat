import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { AppStateType } from "../../Redux/store";
import { UserActions } from "../../Redux/UserReducer";
import InputWithName from "../Inputs/InputWithName";
import { ModalButton, ModalForm } from "../Modal/ModalStyle";
const LoginForm = () => {
    const dispatch = useDispatch();
    const errors = useSelector((state: AppStateType) => state.UserReducer.errors.login?.message);
    const loginSchema = Yup.object().shape({
        login: Yup.string().required("Обязательное  поле"),
        password: Yup.string().required("Обязательное  поле"),
    });
    const login = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: ({ login, password }) => {
            dispatch(UserActions.login(login, password));
        },
    });
    return (
        <ModalForm onSubmit={login.handleSubmit}>
            <InputWithName
                value={login.values.login}
                onBlur={login.handleBlur}
                onChange={login.handleChange}
                name="Имя"
                nameInp="login"
                errors={(login.touched.login && login.errors.login) || errors}
            />
            <InputWithName
                value={login.values.password}
                onChange={login.handleChange}
                onBlur={login.handleBlur}
                name="Пароль"
                type="password"
                nameInp="password"
                errors={(login.touched.password && login.errors.password) || errors}
            />
            <ModalButton type="submit" disabled={login.errors.login || login.errors.password ? true : false}>
                Войти
            </ModalButton>
        </ModalForm>
    );
};

export default LoginForm;
