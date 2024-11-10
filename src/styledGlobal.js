import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
     }
  
    *, ::after, ::before{
        box-sizing: inherit;
    }
  
    body{
        background: ${({ theme }) => theme.colors.primaryLightColor};
    }
`;

export default StyledGlobal;