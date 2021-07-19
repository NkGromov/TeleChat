import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import img from "../../Image/eraser.svg";
import { ChatActions } from "../../Redux/ChatsReducer";
import { AppStateType } from "../../Redux/store";
import { ChatAvatar, ChatAvatarDefault, ChatButton, ChatItem, ChatList, Name, Text, TextWrapper, Time, TopText } from "./ChatListStyle";
type itemProps = {
    name: string;
    text: string;
    avatar: string | null;
    id: number;
};
const Chats = () => {
    const dispatch = useDispatch();
    const chats = useSelector((state: AppStateType) => state.ChatsReducer.chats);
    const findUsers = useSelector((state: AppStateType) => state.UserReducer.findUsers);
    const isAuth = useSelector((state: AppStateType) => state.UserReducer.isAuth);
    useEffect(() => {
        if (isAuth) dispatch(ChatActions.chats());
    }, [isAuth]);
    return (
        <ChatList>
            {findUsers.length !== 0
                ? findUsers.map((el) => <Item key={el.user_id} id={el.user_id} name={el.username} avatar={el.avatar} text="" />)
                : chats.map((el) => <Item key={el.chatId} id={el.chatId} name={el.companion.username} avatar={el.companion.avatar} text="сообщение" />)}
        </ChatList>
    );
};

const Item: React.FC<itemProps> = ({ name, text, avatar, id }) => {
    const dispatch = useDispatch();
    const [isActiveButton, setIsActiveButton] = useState(false);
    const idChatIsActive = useSelector((state: AppStateType) => state.ChatsReducer.chatIdIsActive);
    const setIsActive = () => {
        dispatch(ChatActions.setActiveChat(id));
    };
    useEffect(() => {
        if (idChatIsActive === id) setIsActiveButton(true);
        else setIsActiveButton(false);
    }, [idChatIsActive]);
    return (
        <ChatItem>
            <ChatButton onClick={setIsActive} isActive={isActiveButton}>
                {avatar ? <ChatAvatar src={img} alt="Аватар чата" /> : <ChatAvatarDefault>{name[0]}</ChatAvatarDefault>}
                <TextWrapper>
                    <TopText>
                        <Name>{name}</Name>
                        <Time>12:45</Time>
                    </TopText>
                    <Text color="#8495a9" marginTop="15px">
                        {text}
                    </Text>
                </TextWrapper>
            </ChatButton>
        </ChatItem>
    );
};

export default Chats;
