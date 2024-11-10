import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledTaskPageBody = styled.div`
    padding: 12px;
`

export const StyledBackNavLink = styled(NavLink)`
    display: block;
    margin-block-end: 1.5em;
    color: ${({ theme }) => theme.colors.primaryBlue};
    font-size: 0.9em;
    text-decoration: none;
    transition: opacity 350ms ease-in;

    &:hover{
        color: ${({ theme }) => theme.colors.primaryBlueHover}
    }
`