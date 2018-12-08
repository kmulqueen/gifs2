import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/game";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        {/* <Route exact path="/get-started/:doc.id" component={GetStarted} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
