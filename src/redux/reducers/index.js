import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    dataUser: dataReducer,
    orderReducer,
})

export default rootReducer;
