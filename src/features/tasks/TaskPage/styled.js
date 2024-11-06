import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledTaskPageBody = styled.div`
    padding: 12px;
`

export const StyledBackNavLink = styled(NavLink)`
    color: #000;
    text-decoration: none;
    transition: opacity 350ms ease-in;

    &:hover{
        opacity: 0.8;
    }
`