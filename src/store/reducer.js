const initialState = {
  details: {},
};

export const reducer = (state = initialState, action) => {
  if (action.type === "SET_BEER_DETAILS") {
    const { id, details } = action.payload;
    return { ...state, details: { ...state.details, [id]: details } };
  }
  return state;
};
