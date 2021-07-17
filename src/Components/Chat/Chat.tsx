import React from "react";
import SendButton from "../Buttons/SendButton";
import { Name } from "../ChatsList/ChatsListStyle";
import SingleInput from "../Forms/SingleInput";
import Mesages from "../Messages/Messages";
import { Border, ChatWrapper } from "./ChatStyle";
type props = {
    name: string;
};
const Chat: React.FC<props> = ({ name }) => {
    return (
        <ChatWrapper isActive={true}>
            <Border>
                <Name size="18px">{name}</Name>
            </Border>
            <Mesages />
            <Border>
                <SingleInput color="transparent" />
                <SendButton />
            </Border>
        </ChatWrapper>
    );
};

export default Chat;
