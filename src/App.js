import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/Game/Game";
import Login from "./components/auth/login";
import LogOut from "./components/LogOut (IGNORE)/LogOut";

import Register from "./components/auth/register";
import Lobby from "./pages/lobby/Lobby";
import CreateLobby from "./pages/lobby/CreateLobby";

const App = () => (
  <Router>
    <div>
      
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/lobby" component={Lobby} />
        <Route exact path="/lobby/create" component={CreateLobby} />

        {/* <Route exact path="/get-started/:doc.id" component={GetStarted} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
