import TYPES from "../types";

const initialState = {
  orderData: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_TABLE_DATA_ORDER:
      return {
        ...state,
        orderData: action.payload,
      };

    default:
      return state;
  }
};

export default orderReducer;
