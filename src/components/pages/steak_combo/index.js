import React, { useEffect, useState } from "react";
import { ProductCard } from "../../prod_card";
import { StyledSection, StyledSelect } from "../../main_page/styled";
import { EmptyCard } from "../../prod_card/styled";

export const SteakComboPage = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?food=steak")
      .then((res) => res.json())
      .then((json) => setCard(json));
  }, []);

  const Sorting = ({ target: { value } }) => {
    const sorted = [...card];
    if (value === "A-Z") {
      sorted.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else if (value === "Z-A") {
      sorted.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      });
    } else if (value === "abv ascending") {
      sorted.sort((a, b) => {
        if (a.abv < b.abv) {
          return -1;
        }
        if (a.abv > b.abv) {
          return 1;
        }
        return 0;
      });
    } else if (value === "abv descending") {
      sorted.sort((a, b) => {
        if (a.abv > b.abv) {
          return -1;
        }
        if (a.abve < b.abv) {
          return 1;
        }
        return 0;
      });
    } else if (value === "default sort") {
      sorted.sort((a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    }
    setCard(sorted);
  };

  return (
    <div>
      <StyledSelect onChange={Sorting}>
        <option>default sort</option>
        <option>A-Z</option>
        <option>Z-A</option>
        <option>abv ascending</option>
        <option>abv descending</option>
      </StyledSelect>
      <StyledSection>
        {card.map(({ name, image_url, id, abv }) => (
          <ProductCard
            key={id}
            name={name}
            image_url={image_url}
            abv={abv}
            id={id}
          />
        ))}
        <EmptyCard />
        <EmptyCard />
        <EmptyCard />
      </StyledSection>
    </div>
  );
};
