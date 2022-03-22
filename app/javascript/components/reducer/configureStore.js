import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import thingsReducer from "./things/things";

const reducer = combineReducers({
  thingsReducer,
});

const gStore = createStore(
  reducer,
  applyMiddleware(
    thunk,
    logger
  ),
);

export default gStore;
