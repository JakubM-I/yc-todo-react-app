import styled from "styled-components";
import { StyledMenuItem } from "../../../common/Menu/styled";

export const StyledExamplesMenuItem = styled(StyledMenuItem)`
    color: ${({ theme }) => theme.colors.exmapleTaskButton};

    &:hover{
        color: ${({ theme }) => theme.colors.exmapleTaskButtonHover}
    }
`