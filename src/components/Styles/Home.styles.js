import styled from "styled-components";

export const Bod = styled.body`
  background-color: #67bc98;
  /* position: absolute;
  z-index: 1; */
  @media screen and (max-width: 470px) {
    padding: auto;
  }
`;

export const Container = styled.div`
  max-width: 100%;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row: 2;
  grid-column-gap: 15px;
  /* row-gap: 17px; */
  margin-left: 12%;
  margin-right: 12%;
  @media screen and (max-width: 970px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-row: 3;
    margin-left: 7%;
    margin-right: 7%;
  }

  @media screen and (max-width: 570px) {
    grid-template-columns: 1fr 1fr;
    grid-row: 4;
    grid-column-gap: 15px;
    margin-left: 2%;
    margin-right: 2%;
  }
`;

export const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* text-align: auto;
  /* transition: 0.3s; */
  background-color: white;
  padding: 25px 40px 0px 15px;
  margin-top: 20px;
  height: inherit;
  @media screen and (max-width: 570px) {
    /* padding: 5px 4px 2px 3px; */
    height: 210px;
    padding: 10px 40px 30px 15px;
  }
  /* &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
  } */
  @media screen and (max-width: 970px) {
    height: inherit;
    width: inherit;
  }
`;

///   Card icon
export const IconCard = styled.span`
  /* display: block; */
  font-size: 28px;
  //  color: rgba(233, 53, 66, 0.5); */
  @media screen and (max-width: 570px) {
    font-size: 20px;
    text-align: center;
  }
`;

// Card Title
export const CardTitle = styled.p`
  display: block;
  font-weight: bold;
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* text-align:center; */
  color: #242a56;
  line-height: 2;
  white-space: nowrap;
  @media screen and (max-width: 570px) {
    font-size: 15px;
    white-space: nowrap;
  }
`;

export const Descri = styled.h4`
  /* text-align: justify; */

  line-height: 1.6;
  font-weight: normal;
  font-size: 16px;

  @media screen and (max-width: 570px) {
    font-size: 15px;
    line-height: 1.3;
    /* padding: 0px 40px 0px 15px; */
  }
`;
