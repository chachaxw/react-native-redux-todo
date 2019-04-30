import {
  ADD_TODO, TOGGLE_TODO, EDIT_TODO, TOGGLE_STAR_TODO,
  TOGGLE_EDIT_TODO, REMOVE_TODO, FILTER_TODO,
} from '../actions/todoActions';

const todoReducer = (state = [], action) => {
  switch(action.type) {

    case ADD_TODO:
      return [
        action.payload,
        ...state
      ];

    case TOGGLE_TODO:
      return state.map(todo => {
        if(todo.id !== action.id) {
          return todo;
        }
        
        return Object.assign({}, todo, { isDone: !todo.isDone });
      });

    case EDIT_TODO:
      return state.map(todo => {
        if(todo.id !== action.id) {
          return todo;
        }

        return Object.assign({}, todo, { text: action.text });
      });

    case TOGGLE_STAR_TODO:
      return state.map(todo => {
        if(todo.id !== action.id) {
          return todo;
        }
        
        return Object.assign({}, todo, { isStarred: !todo.isStarred });
      });

    case TOGGLE_EDIT_TODO:
      return state.map(todo => {
        if(todo.id !== action.id) {
          return todo;
        }
        
        return Object.assign({}, todo, { isEditing: !todo.isEditing });
      });

    case REMOVE_TODO:
      return state.filter(todo => {
        return todo.id !== action.id;
      });

    case FILTER_TODO:
      return state.filter(todo => {
        return todo.visibilityFilter === action.filter;
      });

    default:
      return state;
  }

}

export default todoReducer;