import styled from "styled-components";

export const ChatList = styled.ul`
    max-height: 890px;
    overflow-y: auto;
    z-index: 0;
`;
export const ChatItem = styled.li``;
export const ChatButton = styled.button<{ isActive: boolean }>`
    padding: 20px;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${(props) => props.isActive && props.theme.mark};
    span {
        color: ${(props) => props.isActive && props.theme.text};
    }
    &:hover {
        background-color: ${(props) => (props.isActive ? props.theme.mark : "#c4c4c452")};
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
export const ChatAvatarDefault = styled.div`
    width: 50px;
    height: 50px;
    background-color: #db863b;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
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
    color: ${(props) => props.theme.text};
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;
export const TopText = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Name = styled.span<{ size?: string }>`
    font-weight: 700;
    font-size: ${(props) => props.size || "18px"};
    line-height: 21px;
    color: ${(props) => props.theme.text};
`;
export const Time = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.textGrey};
`;
export const Text = styled.span<{ size?: string; marginTop?: string }>`
    display: block;
    margin-top: ${(props) => props.marginTop || "0"};
    font-size: ${(props) => props.size || "16px"};
    line-height: 21px;
    color: ${(props) => props.color || props.theme.text};
    text-align: start;
`;
