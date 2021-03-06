import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../Redux/store";
import Burger from "../Buttons/Burger";
import ChatsList from "../ChatList/ChatList";
import SearchForm from "../Forms/SearchForm";
import Profile from "../Profile/Profile";
import { BurgerWrapper, SearshWrapper, SideBarWrapper } from "./SideBarStyle";
export const ProfileContext = React.createContext(false);
const SideBar = () => {
    const isAuth = useSelector((state: AppStateType) => state.UserReducer.isAuth);
    const [isOpenProfile, setisOpenProfile] = useState(false);
    const changeOpenProfile = () => {
        setisOpenProfile((prev) => !prev);
    };
    return (
        <ProfileContext.Provider value={isOpenProfile}>
            <SideBarWrapper>
                <SearshWrapper>
                    <BurgerWrapper>
                        <Burger onClick={changeOpenProfile} />
                    </BurgerWrapper>
                    <SearchForm />
                </SearshWrapper>
                <ChatsList />
                {isAuth && <Profile setIsActive={changeOpenProfile} />}
            </SideBarWrapper>
        </ProfileContext.Provider>
    );
};

export default SideBar;
