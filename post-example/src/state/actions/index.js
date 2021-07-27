export const addPost =(post) => (dispatch) => {
  dispatch({ type: 'ADD_POST', payload: post })
}
export const fetchPost =(posts) => (dispatch) => {
  dispatch({ type: 'FETCH_POST', payload: posts })
}