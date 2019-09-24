import React, { useReducer } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import VolunteerContext from './volunteerContext';
import VolunteerReducer from './volunteerReducer';
import {
  CREATE_VOLUNTEER,
  DELETE_VOLUNTEER,
  UPDATE_VOLUNTEER,
  NOTIFY_VOLUNTEER,
  SET_CURRENT,
  CLEAR_CURRENT
} from '../types';

const VolunteerState = props => {
  const initialState = {
    volunteers: [],
    volunteer: {}
  };

  const [state, dispatch] = useReducer(VolunteerReducer, initialState);

  // create volunteer

  // get volunteer

  return (
    <VolunteerContext
      value={{
        volunteers: state.volunteers,
        volunteer: state.volunteer
      }}
    >
      {props.children}
    </VolunteerContext>
  );
};

export default VolunteerState;
