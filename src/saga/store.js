import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import userStoreReducer from "./reducers";
import  userSaga  from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let userStore = createStore(
  userStoreReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    reduxDevTools
  )
);

sagaMiddleware.run(userSaga);

export default userStore;