import React from "react";
import { Provider } from "react-redux";

import { Switch, Route } from 'react-router-dom';


import store from "./store";

import Users from "./modules/Users/Users";
import Repositories from "./modules/Repositories/Repositories";
import Commits from "./modules/Commits/Commits";

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/" component={Users} />
      <Route path="/repositories/:login" component={Repositories} />
      <Route path="/commits/:login/:repositorie" component={Commits} />
    </Switch>
  </Provider>
);

export default App;
