import Reducer from "./Reducers/userReducer";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;