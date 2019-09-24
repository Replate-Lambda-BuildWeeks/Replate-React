import React, { useReducer } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import BusinessContext from './businessContext';
import BusinessReducer from './businessReducer';

import {
  CREATE_RESTAURANTS,
  DELETE_RESTAURANTS,
  UPDATE_RESTAURANTS,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const BusinessState = () => {
  return <div></div>;
};

export default BusinessState;
