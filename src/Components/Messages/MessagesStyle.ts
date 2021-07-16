import styled from "styled-components";

export const MessagesList = styled.ul`
    padding: 20px;
    background-color: #1b3650;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const Message = styled.li`
    padding: 20px;
    background-color: #254b6e;
    border-radius: 5px;
    padding: 10px;
    font-size: 18px;
    width: fit-content;
    line-height: 21px;
    color: #ffffff;
    margin-top: 20px;
    max-width: 90%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;
export const MyMessage = styled(Message)`
    background-color: #4890d47f;
    align-self: flex-end;
`;
