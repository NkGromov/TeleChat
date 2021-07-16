import React from "react";
import img from "../../Image/eraser.svg";
import { ChatAvatar, ChatButton, ChatItem, ChatList, Name, Text, TextWrapper, Time, TopText } from "./ChatsListStyle";
type itemProps = {
    name: string;
    text: string;
};
const Chats = () => {
    return (
        <ChatList>
            <Item name="Александр" text="сообщение" />
            <Item name="Сергей" text="сообщение" />
            <Item name="Евгений" text="сообщение" />
            <Item name="Ксения" text="сообщение" />
            <Item name="Мария" text="сообщение" />
        </ChatList>
    );
};

const Item: React.FC<itemProps> = ({ name, text }) => {
    return (
        <ChatItem>
            <ChatButton>
                <ChatAvatar src={img} alt="Автар чата" />
                <TextWrapper>
                    <TopText>
                        <Name>{name}</Name>
                        <Time>12:45</Time>
                    </TopText>
                    <Text marginTop="15px">{text}</Text>
                </TextWrapper>
            </ChatButton>
        </ChatItem>
    );
};

export default Chats;
