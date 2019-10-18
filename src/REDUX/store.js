import {combineReducers, createStore} from "redux";
import ElementsReduser from "./ElementsReduser";

const reducers=combineReducers({
        elements: ElementsReduser
    }
)
const store=createStore(reducers);
export default store;