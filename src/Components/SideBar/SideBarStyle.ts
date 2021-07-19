import styled from "styled-components";

export const SideBarWrapper = styled.div`
    background-color: ${(props) => props.theme.light};
    position: relative;
    max-width: 450px;
`;

export const SearshWrapper = styled.div`
    padding: 20px 20px 20px;
    display: flex;
    align-items: center;
`;
export const BurgerWrapper = styled.div`
    flex-shrink: 0;
    margin-right: 25px;
`;
