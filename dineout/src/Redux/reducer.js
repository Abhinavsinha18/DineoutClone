import {
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_ERROR,
  ADD_TODOS_REQUEST,
  ADD_TODOS_SUCCESS,
  ADD_TODOS_ERROR
} from './actionTypes.js';


const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

//complete the reducer function 
const reducer = (state = initialState,action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return { ...state, isLoading: true };
    case GET_TODOS_SUCCESS:
      return { ...state, isLoading: false, todos: action.payload };
    case GET_TODOS_ERROR:
      return { ...state, isLoading: false, isError: true };
    case ADD_TODOS_REQUEST:
      return { ...state, isLoading: true };
    case ADD_TODOS_SUCCESS:
      return { ...state, isLoading: false, todos: [...state.todos, action.payload] };
    case ADD_TODOS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
