import styled, { css } from "styled-components";
import { StyledMenuItem } from "../../../common/Menu/styled";

export const StyledHiddenTaskBtn = styled(StyledMenuItem)`
    color: ${({ theme }) => theme.colors.primaryTextColor};
    transition: color 450ms ease-in;

    &:hover{
        color: ${({ theme }) => theme.colors.primaryBlueHover}
    }

    ${({ $isHiddenTasks }) => $isHiddenTasks && css`
        color: ${({ theme }) => theme.colors.primaryBlue}
    `}

`