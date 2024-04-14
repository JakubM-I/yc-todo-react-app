import styled from 'styled-components';

export const StyledForm = styled.form`
    background: ${({theme}) => theme.colors.primaryLightColor};
    padding: 15px;
    border-top: 1px solid ${({theme}) => theme.colors.firstBorderColor};
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    
    @media (max-width: ${({theme}) => theme.breakepoints.mobile}px){
        flex-wrap: wrap;
        justify-content: center;
    }

`;

export const StyledInput = styled.input`
    flex-grow: 1;
    padding: 5px;
    font-size: ${({theme}) => theme.font.formFontSize};

    @media(max-width: ${({theme}) => theme.breakepoints.mobile}px){
        flex-basis: 100%;
        margin-bottom: 10px;
        margin-right: 0;
    }
`;

export const StyledButton = styled.button`
    padding: 8px 10px;
    border: 1px solid ${({theme}) => theme.colors.firstBorderColor};
    border-radius: 8px;
    background: ${({theme}) => theme.colors.primaryButton};
    color: ${({theme}) => theme.colors.primaryLightColor};
    font-size: ${({theme}) => theme.font.formFontSize};
    cursor: pointer;
    transition: color .65s, background .65s, transform .45s;

    @media (max-width: ${({theme}) => theme.breakepoints.mobile}px){
        flex-grow: 1;
    }

    &:hover{
        color: ${({theme}) => theme.colors.primaryButton};
        background: ${({theme}) => theme.colors.primaryLightColor};
        transform: scale(1.05);
    }

    &:active{
        transform: scale(0.95);  
    }
`;