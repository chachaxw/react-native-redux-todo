import { SET_VISIBILITY_FILTER } from '../actions/todoActions';

export default function visibilityFilterReducer(state = 'SHOW_ALL', action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;

    default:
      return state;
  }
}