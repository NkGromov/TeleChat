import styled from "styled-components";

export const Panel = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.dark};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;
export const Direct = styled.span`
    padding: 8px;
    font-size: 16px;
    background-color: ${(props) => props.theme.light};
    border-radius: 10px;
    color: ${(props) => props.theme.text}; ;
`;
