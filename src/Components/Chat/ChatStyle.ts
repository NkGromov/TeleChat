import styled from "styled-components";

export const ChatWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: grid;
    grid-template-rows: 68px 12fr minmax(68px, 100px);
    height: 100vh;
    width: 100%;
`;
export const Border = styled.div`
    padding: 20px 20px 20px;
    background-color: ${(props) => props.theme.light};
    display: flex;
    align-items: center;
    gap: 10px;
    max-height: 200px;
`;
