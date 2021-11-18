import React from "react";
import {
  StyledCard,
  StyledHeading,
  StyledCardBody,
  StyledDescription,
} from "./styled";

export const DetailsCard = ({
  name,
  image_url,
  abv,
  description,
  tagline,
  food_pairing,
}) => {
  return (
    <div>
      <StyledCard>
        <StyledHeading>
          <h3>{name}</h3>
        </StyledHeading>
        <StyledCardBody>
          <img src={image_url} alt={name} />
          <p>{abv} abv</p>
          <StyledDescription>
            {description}
            <div>
              <h3>Tagline:</h3>
              <i>{tagline}</i>
            </div>
            <div>
              <h4>Good paired with:</h4>
              <p>{food_pairing.join(", ")}</p>
            </div>
          </StyledDescription>
        </StyledCardBody>
      </StyledCard>
    </div>
  );
};
