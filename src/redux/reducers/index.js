// import carsReducer from "./carsReducer";
import orderReducer from "./orderReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  orderReducer,
});

export default rootReducer;
