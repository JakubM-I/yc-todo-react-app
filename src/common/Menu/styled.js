import styled from 'styled-components';

export const StyledMenu = styled.div`
    display: flex;
    gap: 10px;

    @media(max-width: ${({ theme }) => theme.breakepoints.mobile}px){
        flex-direction: column; 
    }
`;

export const StyledMenuItem = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.menuButton};
    transition: color .4s ease-out;
    cursor: pointer;

    &:hover{
        color: ${({ theme }) => theme.colors.menuButtonHover};
    }

    &:disabled{
        color: ${({ theme }) => theme.colors.menuButtonDisable};
    }
`;