import { createStore, combineReducers, applyMiddleware } from "redux";
import thingsReducer from "./things/things";

const reducer = combineReducers({
  thingsReducer,
});

const gStore = createStore(reducer);

export default gStore;
