import React from "react";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import LoginContainer from "../../containers/login";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import userStoreReducer from "./LoginReducers";
import  userSaga  from "./LoginSaga";

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

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={userStore}>
        <IntlProvider>
          <div style={{ display: "flex" }}>
            <LoginContainer />
          </div>
        </IntlProvider>
      </Provider>
    );
  }
}
export default Login;
