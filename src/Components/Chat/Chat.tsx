import React from "react";
import { useDispatch } from "react-redux";
import arrow from "../../Image/left-arrow.svg";
import { ChatActions } from "../../Redux/ChatsReducer";
import { ButtonBack } from "../Buttons/ButtonStyle";
import { Name } from "../ChatList/ChatListStyle";
import ChatForm from "../Forms/ChatForm";
import Messages from "../Messages/Messages";
import { Border, ChatWrapper } from "./ChatStyle";
type props = {
    name: string;
};
const Chat: React.FC<props> = ({ name }) => {
    const dispath = useDispatch();
    const back = () => {
        dispath(ChatActions.setActiveChat(null));
    };
    return (
        <ChatWrapper>
            <Border>
                <ButtonBack onClick={back}>
                    <img src={arrow} alt="назад" />
                </ButtonBack>
                <Name size="18px">{name}</Name>
            </Border>
            <Messages />
            <ChatForm />
        </ChatWrapper>
    );
};

export default Chat;
