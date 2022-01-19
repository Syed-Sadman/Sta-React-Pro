import React,{useState} from 'react';
import {Link,Route,BrowserRouter,Routes} from 'react-router-dom';
import Home from './Home';
import { Burger, MainLogo, MenuI, MenuItem, RoutingLinks, UnList } from './Styles/Navbar.styles';

function Navbar() {
    const [click,setClick]=useState(false);
//    const [togMenu,setMenu]=useState(false);
    const handleClick=()=>{
        setClick(!click);
    }
    

    // const toggleMenu=()=>{
    //     setMenu(!togMenu);
    // }

    const listObj=[
    {name:"Home",path:"/ "},
    {name:"Service ",path:"/service "},
    {name:"Products ",path:"/products "},
    {name:"Sign up ",path:"/sign-up"}]

    return (
        <>    
            <UnList>
                <MainLogo to='/'>
                      TRVL <i className='fab fa-typo3'/>
                </MainLogo>

                <Burger onClick={handleClick} className={click?'fas fa-times':'fas fa-bars'}/>

                <MenuItem click={click}>
                    {listObj.map((value)=><RoutingLinks key={value.name} to={value.path} >{value.name}</RoutingLinks>)}   
                </MenuItem>
                
                    
                    
            </UnList>    
            <Home/>
        </>
    )
}

export default Navbar;
