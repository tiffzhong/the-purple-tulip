import { createStore, applyMiddleware } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import reducer from "../dux/reducer";

const store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware));

export default store;
