import styled from "styled-components";

export const MessagesList = styled.ul`
    background-color: ${(props) => props.theme.dark};
    max-height: 840px;
    height: inherit;
    display: flex;
    flex-direction: column;
`;

export const Message = styled.li`
    padding: 20px;
    background-color: ${(props) => props.theme.light};
    border-radius: 5px;
    padding: 10px;
    font-size: 18px;
    width: fit-content;
    line-height: 21px;
    color: ${(props) => props.theme.text};
    margin-top: 20px;
    max-width: 90%;
    display: flex;
    gap: 20px;
    align-items: flex-end;
    justify-content: space-between;
    &:first-child {
        margin-top: auto;
    }
`;
export const MyMessage = styled(Message)`
    background-color: ${(props) => props.theme.mark};
    align-self: flex-end;
`;
