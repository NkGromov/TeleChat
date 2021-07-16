import React, { useState } from "react";
import LoginForm from "../Forms/LoginForm";
import RegistrationForm from "../Forms/RegistrationForm";
import { ModalButton, ModalContent, ModalTitle, ModalWrapper } from "./ModalStyle";

const Modal = () => {
    const [isRegistration, setIsRegistration] = useState<boolean>(false);
    const changeForm = () => setIsRegistration((props) => !props);
    return (
        <ModalWrapper>
            <ModalContent>
                <ModalTitle>TELECHAT</ModalTitle>
                {isRegistration ? <RegistrationForm /> : <LoginForm />}
                <ModalButton onClick={changeForm}>{isRegistration ? "Войти" : "Регистация"}</ModalButton>
            </ModalContent>
        </ModalWrapper>
    );
};

export default Modal;
