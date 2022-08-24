import React, { useState } from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;

// install 2 things
// redux and react-redux

// initial setup
// you have to create a store
// store => am referring to global object
// provide the store to the whole application

// once store is created then you have to create a reducer
// atleast one reducer should be created.

// once reducer is linked to the store.
// have to start functionality.

// the state or the store should not mutuate directly
// use the reducer function to update the state.
// the reducer func will go the store and it updated the state and it returns the latest state.

// you have to dispatch an action
// the action which you are dispatching will reach the reducer then the reducer will verify if the action is defined or not .
// if defined then it will run you logic and updates state.
// if not the the existing state is returned.

// rules

// user dispatches an action ==> it reaches to reducer =>reducer will verify for the particular action == > if action matches the it will perform the logic and returns the new state.

// if action is not matched => return the existing state
