import { FETCH_POST, NEW_POST } from '../actions/types';

const initialState ={}

const postReducer =(state= initialState, action) => {
  switch (action.types) {
    case FETCH_POST:
      return {

      }
    case NEW_POST:
      return {
        
      }
    default:
      return state;
  }
}

export default postReducer;

