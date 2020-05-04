import React from "react";
import Login from "./pages/login";
import Layout from "./layout";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const islogin = sessionStorage.getItem("user") === "true";
  return (
    <Switch>
      <Route path="/layout" component={Layout} />
      <Route path="/login" component={Login} />
      <Route
        render={() => {
          if (!islogin) return <Redirect to="/login" />;
          else return <Redirect to="/layout/dashboard" />;
        }}
      />
    </Switch>
  );
}

export default App;
