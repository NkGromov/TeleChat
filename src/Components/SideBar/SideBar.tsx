import Burger from "../Buttons/Burger";
import ChatsList from "../ChatsList/ChatsList";
import Input from "../Inputs/Input";
import { BurgerWrapper, SearshWrapper, SideBarWrapper } from "./SideBarStyle";

const SideBar = () => {
    return (
        <SideBarWrapper>
            <SearshWrapper>
                <BurgerWrapper>
                    <Burger />
                </BurgerWrapper>
                <Input type="text" value="text" name="name" color="#fff" onChange={"d"}></Input>
            </SearshWrapper>
            <ChatsList />
        </SideBarWrapper>
    );
};

export default SideBar;
