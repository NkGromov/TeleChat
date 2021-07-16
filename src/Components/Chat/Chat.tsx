import React from "react";
import { Name } from "../ChatsList/ChatsListStyle";
import Mesages from "../Messages/Messages";
import { ChatWrapper, TopChat } from "./ChatStyle";
type props = {
    name: string;
};
const Chat: React.FC<props> = ({ name }) => {
    return (
        <ChatWrapper isActive={true}>
            <TopChat>
                <Name size="18px">{name}</Name>
            </TopChat>
            <Mesages />
            <TopChat>
                <Name>Name</Name>
            </TopChat>
        </ChatWrapper>
    );
};

export default Chat;
