import React from "react";
//import { Link } from 'react-router-dom'
import {
  FaRegObjectUngroup,
  FaRegSun,
  FaRegListAlt,
  FaRegLifeRing,
  FaRegMoneyBillAlt,
  FaRegEdit,
  FaRegBell,
  FaWind,
} from "react-icons/fa";
import {
  Bod,
  Card,
  CardTitle,
  Container,
  Descri,
  IconCard,
  Paren,
} from "./Styles/Home.styles";

const cardObj = [
  {
    icon: <FaRegObjectUngroup />,
    title: "Design",
    description:
      "Design your website to give it a unique and fitting outlook for it to standout.",
  },
  {
    icon: <FaRegSun />,
    title: "Development",
    description:
      "Develop your existing website with most recent and powerful plugins.",
  },
  {
    icon: <FaRegListAlt />,
    title: "Host",
    description:
      "Host your websites without a hassle with our server from suited web hosting packages.",
  },
  {
    icon: <FaRegLifeRing />,
    title: "E-mail",
    description:
      "Custom email with exciting features to make your business communication simpler and easier like never before.",
  },
  {
    icon: <FaRegMoneyBillAlt />,
    title: "SSL",
    description:
      "Ensure a safe connection between the web servers and the browser with SSL certificate at a convenient deal.",
  },
  {
    icon: <FaRegBell />,
    title: "e-Commerce",
    description:
      "Create your E-Commerce websites with WooCommerce with your preferred payment gateway.",
  },
  {
    icon: <FaRegEdit />,
    title: "Content Writing",
    description:
      "Engage your audience and gain more traffic with a cohesive flow of information portraying your ideas perfectly.",
  },
  {
    icon: <FaWind />,
    title: "Help & Support",
    description: "A 24/7 customer support to solve every problem in no time.",
  },
];

function Home() {
  return (
    <Bod>
      <Container>
        {cardObj.map((cardData) => (
          <Card key={cardData}>
            <IconCard>{cardData.icon}</IconCard>
            <CardTitle>{cardData.title}</CardTitle>
            <Descri>{cardData.description}</Descri>
          </Card>
        ))}
      </Container>
    </Bod>
  );
}

export default Home;
