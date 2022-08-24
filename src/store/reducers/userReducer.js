const initialState = {
  users: [],
  comments: [],
};

export const usersReducer = (state = initialState, action) => {
  // console.log('inside user reducer');
  switch (action.type) {
    case 'FETCH_USERS':
      return { ...state, users: action.payload };
    case 'FETCH_COMMENTS':
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};
