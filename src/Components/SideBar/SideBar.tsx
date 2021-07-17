import Burger from "../Buttons/Burger";
import ChatsList from "../ChatsList/ChatsList";
import SingleInput from "../Forms/SingleInput";
import { BurgerWrapper, SearshWrapper, SideBarWrapper } from "./SideBarStyle";

const SideBar = () => {
    return (
        <SideBarWrapper>
            <SearshWrapper>
                <BurgerWrapper>
                    <Burger />
                </BurgerWrapper>
                <SingleInput color="#fff" />
            </SearshWrapper>
            <ChatsList />
        </SideBarWrapper>
    );
};

export default SideBar;
