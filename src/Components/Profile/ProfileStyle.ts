import styled from "styled-components";

export const ProfileContainer = styled.div`
    height: 100%;
    width: 390px;
    background-color: ${(props) => props.theme.light};
    transition: 0.3s;
`;
export const ProfileWrapper = styled.div<{ isActive: boolean }>`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${(props) => (props.isActive ? "100" : "-100")};
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    background: rgba(0, 0, 0, 0.4);
    transition: 0.3s;
    ${ProfileContainer} {
        transform: ${(props) => (props.isActive ? "translateX(0)" : "translateX(-100%)")};
    }
`;
export const ProfileHeader = styled.div`
    background-color: ${(props) => props.theme.mark};
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    padding: 20px;
`;
export const ProfileBody = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 0;
`;
export const ProfileButton = styled.button`
    padding: 20px;
    width: 100%;
    font-size: 18px;
    color: ${(props) => props.theme.text};
    &:hover {
        background-color: #c4c4c452;
    }
`;
