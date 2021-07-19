const accountReducer = (state=0, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state + action.paylaod
      }
    case 'WITHDRAW':
      return {
        ...state - action.paylaod
      }
    default:
      return state
  }
}

export default accountReducer;
