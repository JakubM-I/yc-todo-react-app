import { createGlobalStyle } from "styled-components";

const StyledGlobal = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
     }
  
    *, ::after, ::before{
        box-sizing: inherit;
    }
  
    :root{
        --icon-width: min(max(6.412vw, 30px), 35px);
        --icon-height: min(max(6.412vw, 30px), 35px);
        --form-font-size: min(max(2.89vw, 14px),17px);
    }
  
    body{
        background: rgb(142, 142, 141);
    }
`;

export default StyledGlobal;