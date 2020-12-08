import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/ABOUT/About";
import Dashboard from "./components/DASHBOARD/Dashboard";
import Home from "./components/HOME/Home";
import Notfound from "./components/NOTFOUND/Notfound";
import "./App.css";

// history.replace: from page3 to page1,
// history.goBack: come back 1 page <==> history.go(-1),
// history.goForward(): go to 1 page <==> history.go(1)

function App() {
  // custom link
  const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          var active = match ? "active abc" : "";
          return (
            <li className={`my-li ${active}`}>
              <Link to={to} className="my-link">
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
  };
  return (
    <Router>
      <div>
        <ul>
          <li>
            <MenuLink label="Home" to="/home" activeOnlyWhenExact={true} />
          </li>
          <li>
            <MenuLink label="About" to="/" activeOnlyWhenExact={true} />
          </li>
          <li>
            <MenuLink
              label="Dashboard"
              to="/dashboard"
              activeOnlyWhenExact={true}
            />
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/home" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
