import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import dashboardRoutes from "../router";
import PrimarySearchAppBar from "../pages/Navbar";
import List from "@material-ui/core/List";
import Icon from "@material-ui/core/Icon";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import "./style.scss";
const layout = "/layout";
const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      return (
        <Route path={layout + prop.path} component={prop.component} key={key} />
      );
    })}
    <Redirect from="/" to="/layout/dashboard" />
  </Switch>
);

var links = pathLocation => {
  return (
    <List className="" style={{ zIndex: 6 }}>
      {dashboardRoutes.map((prop, key) => {
          console.log(layout+prop.path)
        return (
          <NavLink
            to={layout + prop.path}
            className="slide-nav"
            activeClassName="active"
            key={key}
          >
            <ListItem button className={layout+prop.path===pathLocation? "slide-nav-item active": "slide-nav-item"}>
              {typeof prop.icon === "string" ? (
                <Icon className="slide-nav-item-icon">{prop.icon}</Icon>
              ) : (
                <prop.icon className="" />
              )}
              <ListItemText className="slide-nav-item-subject">
                {prop.name}
              </ListItemText>
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
};

class Layout extends React.Component {
  render() {
    const pathLocation = this.props.location.pathname;
    const islogin = sessionStorage.getItem("user") === "true";
    if (!islogin) {
      return (
        <Switch>
          <Redirect to="/login" />
        </Switch>
      );
    }
    return (
      <div className="layout">
        <div className="slide">
          <div className="slide-bar">
            <div className="" style={{ zIndex: 5 }}>
              dadjfklsajkfdlk
            </div>
            {links(pathLocation)}
          </div>
        </div>
        <div className="main">
          <div className="header">
            <PrimarySearchAppBar />
          </div>
          <div className="content">{switchRoutes}</div>
        </div>
      </div>
    );
  }
}
export default Layout;
