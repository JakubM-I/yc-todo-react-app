import styled from 'styled-components';

export const StyledForm = styled.form`
    background: #fff;
    padding: 15px;
    border-top: 1px solid rgb(180, 178, 178);
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    
    @media (max-width: 499px){
        flex-wrap: wrap;
        justify-content: center;
    }

`;

export const StyledInput = styled.input`
    flex-grow: 1;
    padding: 5px;
    font-size: var(--form-font-size);

    @media(max-width: 499px){
        flex-basis: 100%;
        margin-bottom: 10px;
        margin-right: 0;
    }
`;

export const StyledButton = styled.button`
    padding: 8px 10px;
    border: 1px solid  rgb(180, 178, 178);
    border-radius: 8px;
    background: #2a7221;
    color: #fff;
    font-size: var(--form-font-size);
    cursor: pointer;
    transition: color .65s, background .65s, transform .45s;

    @media (max-width: 499px){
        flex-grow: 1;
    }

    &:hover{
        color:#2a7221;
        background: #fff;
        transform: scale(1.05);
    }

    &:active{
        transform: scale(0.95);  
    }
`;