import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cakeReducer } from './reducers/cakeReducer';
import { iceCreamReducer } from './reducers/iceCreamReducer';
import { usersReducer } from './reducers/userReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(
  combineReducers({
    cakeReducer,
    iceCreamReducer,
    usersReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  console.log(store.getState());
});

// portals in react
// debugging react app
// lazy loading and suspense
