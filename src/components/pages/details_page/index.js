import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StyledSection } from "./styled";
import { DetailsCard } from "./detailsCard";

export const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then((res) => res.json())
      .then((json) => setDetails(json));
  }, [id]);

  console.log(details);

  return (
    <div>
      <StyledSection>
        {details.map(
          ({
            name,
            image_url,
            id,
            abv,
            description,
            tagline,
            food_pairing,
          }) => (
            <DetailsCard
              key={id}
              name={name}
              image_url={image_url}
              abv={abv}
              id={id}
              description={description}
              tagline={tagline}
              food_pairing={food_pairing}
            />
          )
        )}
      </StyledSection>
    </div>
  );
};
