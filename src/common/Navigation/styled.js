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
background: ${({ theme }) => theme.colors.primaryGreyColor};
/* position: fixed;
top: 0; */
`

export const StyledNavigationItem = styled.li`
font-size: 1em;
cursor: pointer;
`

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: ${({ theme }) => theme.colors.primaryTextColor};
transition: color 450ms ease-in;

    &:hover{
        color: ${({ theme }) => theme.colors.primaryBlue};
    }

    &.active{
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primaryBlue};
    border-block-end: 1px solid ${({ theme }) => theme.colors.primaryBlue};
    };
`