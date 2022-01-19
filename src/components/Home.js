import React from "react";
//import { Link } from 'react-router-dom'
import {FaRegObjectUngroup} from 'react-icons/fa'
import { Card, Container } from "./Styles/Home.styles";

const cardObj=[
{icon:<FaRegObjectUngroup/>,title:'',description:''},
{icon:'',title:'',description:''},
{icon:'',title:'',description:''},
{icon:'',title:'',description:''},
{icon:'',title:'',description:''},
{icon:'',title:'',description:''},
{icon:'',title:'',description:''},
{icon:'',title:'',description:''}
]



function Home() {
  return (
    <Container>
        <Card>
            {cardObj[0].icon}
           
        </Card>
      {/* <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p>
      <p>pafapjfajfpjapwewaew</p> */}
    </Container>
  );
}

export default Home;


