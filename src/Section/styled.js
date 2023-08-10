import styled from "styled-components";

export const StyledSection = styled.section`
    background: #fff;
    border: 1px solid rgb(180, 178, 178);
    margin-bottom: 15px;
`;

export const StyledHeader = styled.div`
    padding: 15px;
    display: flex;

    @media (max-width: 499px){
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
    }
`;

export const StyledTitle = styled.h3`
    margin: 0;
    flex-grow: 1;

    @media(max-width: 499px){
        flex-basis: 100%;
    }
`;