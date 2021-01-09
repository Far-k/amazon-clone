import React, { createContext, usecontext, useReducer, useContext } from 'react';

//prepares the data layer
export const StateContext = createContext();

//wrap the app and provide the datalayer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//pull info from the datalayer
export const useStateValue = () => useContext(StateContext)