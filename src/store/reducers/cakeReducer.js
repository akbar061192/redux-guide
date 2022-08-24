const initialState = {
  cakes: 20,
};

export const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ORDER_CAKES':
      return { ...state, cakes: state.cakes - action.payload };
    case 'RESTOCK_CAKES':
      return { ...state, cakes: state.cakes + action.payload };
    default:
      return state;
  }
};
