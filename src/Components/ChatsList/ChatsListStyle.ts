import styled from "styled-components";

export const ChatList = styled.ul``;
export const ChatItem = styled.li``;
export const ChatButton = styled.button`
    padding: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    &:hover {
        background-color: #c4c4c452;
    }
    &:focus {
        background-color: #4890d47f;
        span {
            color: #fff;
        }
    }
`;
export const ChatAvatar = styled.img`
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 25px;
    overflow: hidden;
    flex-shrink: 0;
`;
export const TextWrapper = styled.div`
    display: block;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    width: 100%;
`;
export const TopText = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Name = styled.span<{ size?: string }>`
    font-weight: 700;
    font-size: ${(props) => props.size || "18px"};
    line-height: 21px;
    color: #ffffff;
`;
export const Time = styled.span`
    font-size: 14px;
    color: #8495a9;
`;
export const Text = styled.span<{ size?: string; marginTop?: string }>`
    display: block;
    margin-top: ${(props) => props.marginTop || "0"};
    font-size: ${(props) => props.size || "16px"};
    line-height: 21px;
    color: ${(props) => props.color || "#8495a9"};
    text-align: start;
    max-width: 90%;
`;
