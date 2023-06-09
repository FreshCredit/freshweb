const initialState = {
  inputType: true,
  email: "janeDoe@Protonmail.com",
  phoneNumber: "+1 253-252-2541"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INPUT_TYPE':
      return {
        ...state, inputType: action.payload,
      }
    case "SET_LOGIN_INFO":
      const { payload } = action
      if (payload.keyName) {
        state[payload.keyName] = payload.value
      }
    default:
      return state;
  }
}
export default reducer;