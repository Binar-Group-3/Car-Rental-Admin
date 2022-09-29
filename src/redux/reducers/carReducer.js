import TYPES from "../types"

const initState = {
  car: {},
}

const carReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.GET_CAR:
      return {
        car: action.payload,
      }
    default:
      return state
  }
}

export default carReducer
