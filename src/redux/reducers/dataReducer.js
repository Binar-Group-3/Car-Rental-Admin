import TYPES from "../types"

const initialState = {
  data: [],
  car: {},
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_DATA:
      return {
        ...state,
        data: action.payload,
      }
    case TYPES.GET_CAR:
      return {
        ...state,
        car: action.payload,
      }
    default:
      return state
  }
}

export default dataReducer
