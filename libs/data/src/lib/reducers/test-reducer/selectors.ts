/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { ApplicationRootState } from 'types';

const selectHome = (state: ApplicationRootState) => {    
  return state.homeReducer || initialState;
};

const makeSelectUsername = () =>
  createSelector(selectHome, substate => {
    
    return substate.username;
  });

export { selectHome, makeSelectUsername };