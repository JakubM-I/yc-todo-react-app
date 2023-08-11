import styled from 'styled-components';

export const StyledTaskMenu = styled.div`
    display: flex;
    gap: 10px;

    @media(max-width: 499px){
        flex-direction: column; 
    }
`;

export const StyledMenuItem = styled.button`
    background: none;
    border: none;
    color: #0040ff;
    transition: color .4s ease-out;
    cursor: pointer;

    &:hover{
        color: #8fabff;
    }

    &:disabled{
        color:#c6c5c5e9
    }
`;