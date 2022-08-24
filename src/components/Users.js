import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, getComments } from '../store/userActions';

const Users = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const fetchUsersData = () => {
    dispatch(getUsers());
  };

  const fetchComments = () => {
    dispatch(getComments());
  };

  return (
    <div>
      <button onClick={fetchUsersData}>Fetch Users</button>
      <button onClick={fetchComments}>Fetch Comments</button>

      <div>
        {state.usersReducer.users.map(user => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>

      <div>
        {state.usersReducer.comments.map(user => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Users;
