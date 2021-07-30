import styled from "styled-components";

export const BurgerBtn = styled.button`
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
        width: 80%;
        height: 3px;
        background-color: ${(props) => props.theme.mark};
        display: block;
    }
    span:first-child {
        margin-bottom: 5px;
    }
    span:last-child {
        margin-top: 5px;
    }
    &:hover {
        filter: brightness(1.5);
    }
`;
export const Button = styled.button`
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    img {
        width: 100%;
        height: 100%;
        fill: ${(props) => props.theme.mark};
        color: ${(props) => props.theme.mark};
    }
`;
export const ButtonBack = styled(Button)`
    display: none;
    @media (max-width: 1024px) {
        display: initial;
    }
`;
