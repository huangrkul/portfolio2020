import React, {createContext, useReducer} from 'react';

const initialState = {
  weather: {},
  projects: []
};

const store = createContext(initialState);
const {Provider} = store;

const StateProvider = ({children}) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
      case 'weather':
        return {...state, weather: action.payload};
      case 'projects':
        return {...state, projects: action.payload};
      default:
        throw new Error();
    };
  }, initialState);

  return <Provider value={{state, dispatch}}>{children}</Provider>;
};

export { store, StateProvider };