import axios from 'axios';

// normal way to invoking api in react

// export const getPosts = async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//   return {
//     type: 'FETCH_USERS',
//     payload: response.data,
//   };
// };

// redux - thunk way

export const getUsers = () => {
  return async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
      type: 'FETCH_USERS',
      payload: response.data,
    });
  };
};

export const getComments = () => {
  return async dispatch => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
    dispatch({
      type: 'FETCH_COMMENTS',
      payload: response.data,
    });
  };
};
