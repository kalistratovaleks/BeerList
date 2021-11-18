import React from "react";
import { Link } from "react-router-dom";
import { StyledCard, StyledHeading, STYLED_P_ABV, StyledLink } from "./styled";

export const ProductCard = ({ name, image_url, abv, id }) => {
  return (
    <div>
      <StyledCard>
        <StyledHeading>
          <p>{name}</p>
        </StyledHeading>
        <STYLED_P_ABV>{abv}% abv</STYLED_P_ABV>
        <img src={image_url} alt={name} />
        <StyledLink>
          <Link to={`/beer_details/${id}`}>About...</Link>
        </StyledLink>
      </StyledCard>
    </div>
  );
};
