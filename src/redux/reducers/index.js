import {combineReducers} from "redux";
import carReducer from "./carReducer";
import orderReducer from "./orderReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    orderReducer,
    car: carReducer,
    authReducer,
})

export default rootReducer;
