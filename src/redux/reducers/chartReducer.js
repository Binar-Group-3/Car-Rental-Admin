import TYPES from "../types";

const initialState = {
    chartData: [],
};

const chartReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GET_CHART_DATA_ORDER:
            return {
                ...state,
                chartData: action.payload,
            };

        default:
            return state;
    }
};

export default chartReducer;