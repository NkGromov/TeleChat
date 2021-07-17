import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../../Image/eraser.svg";
import { ChatActions } from "../../Redux/ChatsReducer";
import { AppStateType } from "../../Redux/store";
import { ChatAvatar, ChatButton, ChatItem, ChatList, Name, Text, TextWrapper, Time, TopText } from "./ChatsListStyle";
type itemProps = {
    name: string;
    text: string;
};
const Chats = () => {
    const dispatch = useDispatch();
    const chats = useSelector((state: AppStateType) => state.ChatsReducer.chats);
    useEffect(() => {
        dispatch(ChatActions.chats());
    }, []);
    return (
        <ChatList>
            {chats.map((el) => (
                <Item key={el.chatId} name={el.companion.username} text="сообщение" />
            ))}
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
