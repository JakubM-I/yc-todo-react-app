import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 8px 10px;
    border: 1px solid ${({ theme }) => theme.colors.firstBorderColor};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.primaryButton};
    color: ${({ theme }) => theme.colors.primaryLightColor};
    font-size: ${({ theme }) => theme.font.formFontSize};
    cursor: pointer;
    transition: color .65s, background .65s, transform .45s;

    @media (max-width: ${({ theme }) => theme.breakepoints.mobile}px){
        flex-grow: 1;
    }

    &:hover{
        color: ${({ theme }) => theme.colors.primaryButton};
        background: ${({ theme }) => theme.colors.primaryLightColor};
        transform: scale(1.05);
    }

    &:active{
        transform: scale(0.95);  
    }
`;