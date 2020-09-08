import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const NotFound = lazy(() => import("./NotFound"));
const Home = lazy(() => import("./Home"));

export default (props) => (
  <Router>
    {props.Header}
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);
