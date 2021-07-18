import React from "react";
import { BurgerBtn } from "./ButtonStyle";
type props = {
    onClick: () => void;
};
const Burger: React.FC<props> = ({ onClick }) => {
    return (
        <BurgerBtn onClick={onClick}>
            <span></span>
            <span></span>
            <span></span>
        </BurgerBtn>
    );
};

export default Burger;
