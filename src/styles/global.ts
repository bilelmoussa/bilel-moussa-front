import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Arial', sans-serif; 
   }
   #root{
       margin:0 auto;
   }
   body{
       min-height: 100vh;
       background-color: #121212;
   }
`