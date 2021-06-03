import React from "react";
import { Button } from "react-bootstrap";
import NavigationBar from "./Component/NavigationBar/NavigationBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import Setting from "./Component/Setting/Setting";
import Coach from "./Component/Coach/Coach";

const App = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/learn">
            <Home />
          </Route>
          <Route path="/setting/account">
            <Setting />
          </Route>
          <Route path="/setting/coach">
            <Coach />
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
