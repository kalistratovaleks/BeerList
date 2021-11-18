import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  height: 90px;
  background-color: black;
  color: white;
  font-size: 24px;
  z-index: 1;
`;

export const StyledHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
`;

export const StyledSectionInHeader = styled.section`
  position: relative;
  height: 35px;
  background-color: gray;
  box-shadow: 0px 17px 15px -5px rgba(0, 0, 0, 0.26);
  display: flex;
  justify-content: center;
  align-items: center;
  & > a {
    font-size: 16px;
    margin-left: 35px;
    color: white;
    text-decoration: none;
    transition: color linear 0.2s;
    &:hover {
      color: black;
    }
  }
`;
