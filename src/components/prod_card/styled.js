import styled from "styled-components";

export const StyledCard = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 430px;
  text-align: center;
  margin: 25px;
  border-radius: 25px;
  background-color: #f1f3f4;
  transition: box-shadow 0.2s linear;
  & > img {
    position: relative;
    width: 90px;
    height: 300px;
  }
  &:hover {
    box-shadow: 0px 5px 33px -3px rgba(34, 60, 80, 0.54);
  }
`;

export const EmptyCard = styled.div`
  width: 300px;
  margin: 25px;
`;

export const StyledHeading = styled.div`
  text-align: center;
  height: fit-content;
  background-color: gray;
  color: white;
  font-size: 14px;
  padding: 3px 10px;
`;

export const STYLED_P_ABV = styled.p`
  position: relative;
  width: fit-content;
  left: 210px;
  margin: 0;
`;

export const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  & > a {
    display: block;
    width: fit-content;
    margin-top: 10px;
    color: black;
    text-decoration: none;
    font-weight: bold;
    transition: color linear 0.1s;
    &:hover {
      color: #e15656;
    }
  }
`;
