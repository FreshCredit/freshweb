const initialState = {
  bankType: true,
  name: "JANE DOE",
  birthday: "05/24",
  cardNumber: "1231 3000 1524 0000",
  bankNumber: "12345678911125",
  routing: ""
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BANK_TYPE':
      return {
        ...state, bankType: action.payload,
      }
    case "SET_BANK_INFO":
      const { payload } = action
      console.log("action", action)
      if (payload.keyName) {
        state[payload.keyName] = payload.value
      }
    default:
      return state;
  }
}
export default reducer;