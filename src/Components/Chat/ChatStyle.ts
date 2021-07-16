import styled from "styled-components";

export const ChatWrapper = styled.div<{ isActive: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    transform: ${(props) => (props.isActive ? "translateX(0);" : "translateX(100%)")};
    display: grid;
    grid-template-rows: 1fr 12fr 1fr;
`;
export const TopChat = styled.div`
    padding: 20px 20px 20px;
    background-color: #254b6e;
    max-height: 65px;
`;
