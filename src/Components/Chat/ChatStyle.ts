import styled from "styled-components";
import { Message } from "../Messages/MessagesStyle";

export const ChatWrapper = styled.div<{ isActive: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    display: grid;
    grid-template-rows: 68px 12fr 68px;
    height: 100vh;
    width: 100%;
    visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    ${Message} {
        opacity: ${(props) => (props.isActive ? 1 : 0)};
    }
`;
export const Border = styled.div`
    padding: 20px 20px 20px;
    background-color: ${(props) => props.theme.light};
    display: flex;
    align-items: center;
`;
