import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../Redux/store";
import SendButton from "../Buttons/SendButton";
import { Name } from "../ChatList/ChatListStyle";
import ChatForm from "../Forms/ChatForm";
import Mesages from "../Messages/Messages";
import { Border, ChatWrapper } from "./ChatStyle";
type props = {
    id: number;
    name: string;
};
const Chat: React.FC<props> = ({ name, id }) => {
    const isActive = useSelector((state: AppStateType) => state.ChatsReducer.chatIdIsActive);
    return (
        <ChatWrapper isActive={isActive === id ? true : false}>
            <Border>
                <Name size="18px">{name}</Name>
            </Border>
            <Mesages id={id} name={name} />
            <Border>
                <ChatForm isActive={isActive === id ? true : false} />
                <SendButton />
            </Border>
        </ChatWrapper>
    );
};

export default Chat;
