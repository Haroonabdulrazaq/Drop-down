// import postAction from '../actions';

const postReducer =(state={}, action) => {
  switch (action.type) {
    case 'ADD_POST':
    return {
      ...state,
      post: action.payload
    }
    case 'FETCH_POST':
    return {
      ...state,
      posts: action.payload
    }
    default:
      return state;
  }
}

export default postReducer;
