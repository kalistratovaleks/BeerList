export const setBeerDetails = (id, details) => {
  return { type: "SET_BEER_DETAILS", payload: { id, details } };
};
