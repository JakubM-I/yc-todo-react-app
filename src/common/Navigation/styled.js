import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.ul`
list-style: none;
padding: 15px 0;
margin-block: 0 35px;
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
background: ${({ theme }) => theme.colors.mainBackgroundColor};
/* position: fixed;
top: 0; */
`

export const StyledNavigationItem = styled.li`
font-size: 1em;
cursor: pointer;
`

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: ${({ theme }) => theme.colors.primaryBackgroundColor};

    &.active{
        font-weight: 700;
    };
`