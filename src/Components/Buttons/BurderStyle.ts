import styled from "styled-components";

export const BurgerBtn = styled.button`
    width: 45px;
    span {
        width: 80%;
        height: 3px;
        background-color: #1b3650;
        display: block;
    }
    span:first-child {
        margin-bottom: 5px;
    }
    span:last-child {
        margin-top: 5px;
    }
    &:hover {
        filter: brightness(1.8);
    }
`;
