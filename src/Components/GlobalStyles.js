import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    .clearFix:after {content:"";display:block;width:0;height:0;overflow:hidden;clear:both;}
    ul:after,ol:after,dl:after {content:"";display:block;width:0;height:0;overflow:hidden;clear:both;}
`;

export default GlobalStyles;
