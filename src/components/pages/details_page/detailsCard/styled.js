import styled from "styled-components";

export const StyledCard = styled.div`
  box-sizing: border-box;
  width: calc(100vw - 250px);
  height: calc(100vh - 200px);
  text-align: center;
  margin: 25px;
  border-radius: 25px;
  background-color: #f1f3f4;
`;
export const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  color: white;
`;

export const StyledCardBody = styled.div`
  display: flex;
  & > img {
    position: relative;
    width: 100px;
    margin: 60px 0 0 10vw;
  }
`;

export const StyledDescription = styled.div`
  width: 540px;
  margin: 50px 0 0 10vw;
`;
