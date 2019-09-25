import React, { useReducer } from 'react'; // gives us acces to the state and dispatch so we can dispatch to our reducer.

import uuid from 'uuid';
import BusinessContext from './businessContext';
import businessReducer from './businessReducer';
// import types
import {
  ADD_BUSINESS,
  DELETE_BUSINESS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BUSINESS,
  FILTER_BUSINESS,
  CLEAR_FILTER
} from '../types';

//Set initial state

const BusinessState = props => {
  const initialState = {
    businesses: [
      {
        id: 1,
        restaurant_name: 'Bread and Kabob',
        phone: '222-222-2222',
        email: 'BreadandKabob@email.com',
        location: 'dallas'
      },
      {
        id: 2,
        restaurant_name: 'Pizza Hut',
        phone: '333-333-3333',
        email: 'PizzaHut@email.com',
        location: 'tampa'
      },
      {
        id: 3,
        restaurant_name: 'Applebees',
        phone: '444-444-4444',
        email: 'Applebees@email.com',
        location: 'chicago'
      }
    ],
    current: null, // so when ever you click edit you want whatever contact that is to be put into this piece of state. step 1: after adding this state you must add it to the provider below. step 2: go down in this component and set up the function that will set the the current contact. step 3 go to the component that you have the edit button inside of and destructure the functions from context you created so they can be used in that component now.
    filtered: null
  };

  const [state, dispatch] = useReducer(businessReducer, initialState);

  // Add Business
  const addBusiness = business => {
    business.id = uuid.v4();
    dispatch({ type: ADD_BUSINESS, payload: business }); // now go to reducer and update reducer with state and payload. make sure to add your function to the context provider value, in this component.
  };
  // Delete Business
  const deleteBusiness = id => {
    dispatch({ type: DELETE_BUSINESS, payload: id }); // now go to reducer and update reducer with state and payload. make sure to add your function to the context provider value, in this component.
  };

  // Set Current Business
  const setCurrent = business => {
    dispatch({ type: SET_CURRENT, payload: business }); // now go to reducer and update reducer with state and payload. make sure to add your function to the context provider value, in this component.
  };

  // Clear Current Business
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT }); // now go to reducer and update reducer with state and payload. make sure to add your function to the context provider value, in this component.
  };

  // Update Business
  const updateBusiness = business => {
    dispatch({ type: UPDATE_BUSINESS, payload: business }); // now go to reducer and update reducer with state and payload. make sure to add your function to the context provider value, in this component.
  };

  // Filter Businesses
  const filterBusiness = text => {
    dispatch({ type: FILTER_BUSINESS, payload: text }); // now go to reducer and update reducer with state and payload. make sure to add your function to the context provider value, in this component.
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER }); // now go to reducer and update reducer with state and payload. make sure to add your function to the context provider value, in this component.
  };

  return (
    <BusinessContext.Provider
      value={{
        businesses: state.businesses,
        current: state.current,
        filtered: state.filtered,
        addBusiness,
        deleteBusiness,
        setCurrent,
        clearCurrent,
        updateBusiness,
        filterBusiness,
        clearFilter
      }}
    >
      {props.children}
    </BusinessContext.Provider>
  );
};

export default BusinessState;
