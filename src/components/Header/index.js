import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledHeaderDiv, StyledSectionInHeader } from "./styled";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderDiv>PUNK BEER</StyledHeaderDiv>
      <StyledSectionInHeader>
        {/* <a href="/main">All Beer</a>
        <a href="/pizza_combo">Beer with pizza</a>
        <a href="/steak_combo">Beer with steak</a> */}
        {/* ^ordinary a^ */}
        <Link to="/">All bear</Link>
        <Link to="/pizza_combo">Combo with pizza</Link>
        <Link to="/steak_combo"> Combo with steak</Link>
      </StyledSectionInHeader>
    </StyledHeader>
  );
};
