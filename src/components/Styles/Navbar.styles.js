
import styled from 'styled-components';
import {Link} from 'react-router-dom';






// main wrapper 
export const UnList=styled.ul`

  padding: 10px 0px 10px 0px;
  position: sticky;
  top:0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(12,auto);
  background-color: white;
  
  @media screen and (max-width:760px){
    grid-template-rows: 1fr auto;
    
    /* background-color: rgba(233,45,23,0.3); */
  }
  max-width: 100%;

`



// Main logo 

export const MainLogo=styled.div`
text-decoration: none;
font-size: x-large;
grid-column: 2/9;
grid-row: 1;

`

// Burger toggle

export const Burger=styled.div`
  display: none;
@media (max-width:760px){
  display: grid;
  grid-column:11/13 ;
  align-items: center;
}
/* text-decoration: none; 
justify-self: end;
grid-column: 11/12 ;
/* grid-row:2; 
align-self:center;
*/


`



// mapping through links of menu's
export const RoutingLinks=styled(Link)`
  text-decoration: none;
  font-size: 1.1rem;
  margin-right: 15px;
  
  /* padding: 0 15px 0 15px;
   */
  @media screen and (max-width:760px){
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align:center;
  }
  
`








// menu item  // Home about

export const MenuItem=styled.div`
  grid-column: 11/-1;
  grid-row:1;
  
  @media screen and (max-width:760px){
  display: ${({click})=>click?'block':'none'};
  width: 100%;
  position: relative;
  grid-column: 1/13;
  grid-row:2/auto; 
  transition:  all 0.5s ease;
  margin-top: 50px;
  
}
  
  
`


