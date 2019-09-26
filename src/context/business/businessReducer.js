import {
  ADD_BUSINESS,
  DELETE_BUSINESS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BUSINESS,
  FILTER_BUSINESS,
  CLEAR_FILTER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_BUSINESS: // this case adds a business to the UI
      return {
        ...state,
        businesses: [...state.businesses, action.payload]
      };

    case UPDATE_BUSINESS:
      return {
        ...state,
        // mapping over businesses and checking if original business matches the business id of the updated business if so return the edited business if not return regular current business.
        businesses: state.businesses.map(business => {
          return business.id === action.payload.id ? action.payload : business;
        })
      };

    case DELETE_BUSINESS: // this case deletes a business in our UI
      return {
        ...state,
        // filter out the business we want to delete from the UI
        businesses: state.businesses.filter(
          business => business.id !== action.payload
        )
      };

    case SET_CURRENT: // this case sets the current business for edit
      return {
        ...state,
        current: action.payload
      };

    case CLEAR_CURRENT: // this case clears the current business after edit
      return {
        ...state,
        current: null
      };

    case FILTER_BUSINESS: // this case filters the business and emails
      return {
        ...state,
        filtered: state.businesses.filter(business => {
          const regex = new RegExp(`${action.payload}`, 'gi'); //gi means global case insensitive
          return (
            business.restaurant_name.match(regex) || business.email.match(regex)
          ); // this will return anything were the name matches the text thats passed in, or the email text passed in.
        })
      };

    case CLEAR_FILTER: // this case clears the filter field
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
