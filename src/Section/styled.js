import styled from "styled-components";

export const StyledSection = styled.section`
    background: ${({theme}) => theme.colors.primaryLightColor};
    border: 1px solid ${({theme}) => theme.colors.borderColor};
    margin-bottom: 15px;
`;

export const StyledHeader = styled.div`
    padding: 15px;
    display: flex;

    @media (max-width: ${({theme}) => theme.breakepoints.mobile}px){
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
`;

export const StyledTitle = styled.h3`
    margin: 0;
    flex-grow: 1;

    @media(max-width: ${({theme}) => theme.breakepoints.mobile}px){
        flex-basis: 100%;
    }
`;