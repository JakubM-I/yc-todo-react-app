import styled from 'styled-components';

export const StyledAppMain = styled.main`
    background: ${({ theme }) => theme.colors.primaryLightColor};
    width: min(1000px, calc(100% - 20px));
    margin-inline: auto;
    margin-block-start: 15px;
    padding: 15px;
`;