import {combineReducers} from "redux";
import carReducer from "./carReducer";
import orderReducer from "./orderReducer";


const rootReducer = combineReducers({
    orderReducer,
    car: carReducer,
})

export default rootReducer;
