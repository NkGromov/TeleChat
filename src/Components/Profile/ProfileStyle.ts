import styled from "styled-components";
import { ReactComponent as logoutSvg } from "../../Image/logout.svg";
import { ReactComponent as nightSvg } from "../../Image/night.svg";
export const ProfileContainer = styled.div`
    height: 100%;
    width: 390px;
    background-color: ${(props) => props.theme.light};
    transition: 0.3s;
    @media (max-width: 500px) {
        width: 280px;
    }
`;
export const ProfileWrapper = styled.div<{ isActive: boolean }>`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${(props) => (props.isActive ? "100000" : "-100")};
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.text};
    span {
        margin: 0 auto 0 20px;
    }
    &:hover {
        background-color: #c4c4c452;
    }
`;
export const ExitSvg = styled(logoutSvg)`
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.text};
`;

export const NightSvg = styled(nightSvg)`
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.text};
`;
