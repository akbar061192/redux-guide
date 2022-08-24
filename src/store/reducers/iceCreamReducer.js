const initialState = {
  iceCreams: 50,
};

export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ORDER_ICECREAMS':
      return { ...state, iceCreams: state.iceCreams - action.payload };
    case 'RESTOCK_ICECREAMS':
      return { ...state, iceCreams: state.iceCreams + action.payload };
    default:
      return state;
  }
};
