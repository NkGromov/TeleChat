import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../Redux/store";
import LoginForm from "../Forms/LoginForm";
import RegistrationForm from "../Forms/RegistrationForm";
import { ModalButton, ModalContent, ModalTitle, ModalWrapper } from "./ModalStyle";

const Modal = () => {
    const isAuth = useSelector((state: AppStateType) => state.UserReducer.isAuth);
    const [isRegistration, setIsRegistration] = useState<boolean>(false);
    const changeForm = () => setIsRegistration((props) => !props);
    return (
        <ModalWrapper isActive={!isAuth}>
            {!isAuth && (
                <ModalContent>
                    <ModalTitle>TELECHAT</ModalTitle>
                    {isRegistration ? <RegistrationForm /> : <LoginForm />}
                    <ModalButton onClick={changeForm}>{isRegistration ? "Войти" : "Регистация"}</ModalButton>
                </ModalContent>
            )}
        </ModalWrapper>
    );
};

export default Modal;
