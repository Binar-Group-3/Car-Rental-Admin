import {combineReducers} from "redux";
import carReducer from "./carReducer";
import dataReducer from "./dataReducer";
import orderReducer from "./orderReducer";


const rootReducer = combineReducers({
    dataUser: dataReducer,
    orderReducer,
    car: carReducer,
})

export default rootReducer;
