import { createGlobalStyle } from 'styled-components'

const GlobalStyles= createGlobalStyle`
*{ margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
   
    
    background-color: #67bc98;
    /* color: ${props => (props.darkMode ? 'white' : 'black')}; */
  }
`

export default GlobalStyles;
