import {applyMiddleware, combineReducers, createStore} from "redux";
import ElementsReduser from "./ElementsReduser";
import thunk from "redux-thunk";

const reducers=combineReducers({
        elementsReduser: ElementsReduser
    }
)
const store=createStore(reducers,applyMiddleware(thunk));
export default store;