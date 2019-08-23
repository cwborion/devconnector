import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      // This use of .filter() basically returns an empty array of alerts, because nothing should
      // fulfill the following condition because every alert.id will match a payload (ID),
      // so if the goal is to get the alerts removed, this is set up to return an empty array
      // no matter what.
      // It is a condition that can't be met by the logic in the filter method, thus returning an
      // empty array, thus removing the alerts one by one according to the timeout
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}
