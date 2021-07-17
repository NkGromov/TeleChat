import React from "react";
import send from "../../Image/send.svg";
import { Button } from "./ButtonStyle";

const SendButton = () => {
    return (
        <Button>
            <img src={send} alt="Отрпавить сообщение" />
        </Button>
    );
};

export default SendButton;
