export const depositMoney = (amount) => (dispatch) => {
  dispatch({ type: 'deposit', payload: amount })
}

export const withDrawMoney =(amount) => (dispatch) => {
  dispatch({ type: 'withdraw', payload: amount })
}
