import styled from 'styled-components';

export const StyledForm = styled.form`
    background: ${({ theme }) => theme.colors.primaryLightColor};
    padding: 15px;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    
    @media (max-width: ${({ theme }) => theme.breakepoints.mobile}px){
        flex-wrap: wrap;
        justify-content: center;
    }

`;

export const StyledInput = styled.input`
    flex-grow: 1;
    padding: 5px;
    border: 1px solid ${({ theme }) => theme.colors.borderGray};
    font-size: ${({ theme }) => theme.font.formFontSize};

    &::placeholder{
        color: ${({ theme }) => theme.colors.secondaryText};
        font-size: 0.9em;
    }

    @media(max-width: ${({ theme }) => theme.breakepoints.mobile}px){
        flex-basis: 100%;
        margin-bottom: 10px;
        margin-right: 0;
    }
`;