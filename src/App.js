import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./pages/game";
import Login from "./pages/login";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Game} />
        <Route exact path="/login" component={Login} />
        
        {/* <Route exact path="/get-started/:doc.id" component={GetStarted} /> */}
      </Switch>
    </div> 
  </Router>  
);


export default App;
