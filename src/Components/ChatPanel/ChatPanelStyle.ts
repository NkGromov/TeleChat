import styled from "styled-components";

export const Panel = styled.div<{ toggle?: boolean }>`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.dark};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 1024px) {
        position: absolute;
        transform: ${(props) => (props.toggle ? "translateX(0)" : "translateX(100%)")};
    }
`;
export const Direct = styled.span`
    padding: 8px;
    font-size: 16px;
    background-color: ${(props) => props.theme.light};
    border-radius: 10px;
    color: ${(props) => props.theme.text}; ;
`;
