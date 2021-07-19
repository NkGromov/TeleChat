import React, { useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../Redux/store";
import { UserActions } from "../../Redux/UserReducer";
import { ChatAvatar, ChatAvatarDefault, Name } from "../ChatList/ChatListStyle";
import { ProfileContext } from "../SideBar/SideBar";
import { ProfileBody, ProfileButton, ProfileContainer, ProfileHeader, ProfileWrapper } from "./ProfileStyle";
type props = {
    setIsActive: () => void;
};

const Profile: React.FC<props> = ({ setIsActive }) => {
    const dispatch = useDispatch();
    const user = useSelector((state: AppStateType) => state.UserReducer.user);
    const isOpenProfile = useContext(ProfileContext);
    const containerRef = useRef<HTMLDivElement>(null);
    const setCloseProfile = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const path = event.nativeEvent.composedPath && event.nativeEvent.composedPath();
        if (!path.includes(containerRef.current)) setIsActive();
    };
    const changeTheme = () => {
        if (user.theme_color === "dark") dispatch(UserActions.changeTheme("light"));
        else dispatch(UserActions.changeTheme("dark"));
    };
    const logout = () => {
        dispatch(UserActions.logout());
    };
    return (
        <ProfileWrapper onClick={setCloseProfile} isActive={isOpenProfile}>
            <ProfileContainer ref={containerRef}>
                <ProfileHeader>
                    {user.avatar ? <ChatAvatar src="das" alt="Автар чата" /> : <ChatAvatarDefault>{user.username[0]}</ChatAvatarDefault>}
                    <Name>{user.username}</Name>
                </ProfileHeader>
                <ProfileBody>
                    <ProfileButton onClick={changeTheme}>{user.theme_color === "light" ? "Темня тема" : "Светлая тема"}</ProfileButton>
                    <ProfileButton onClick={logout}>Выйти</ProfileButton>
                </ProfileBody>
            </ProfileContainer>
        </ProfileWrapper>
    );
};

export default Profile;
