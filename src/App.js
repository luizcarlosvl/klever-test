import './App.css';
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Pages from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact component={ Pages.Home } path="/" />
        <Route exact component={ Pages.AddToken } path="/addtoken" />
        <Route exact component={ Pages.EditToken } path="/edittoken/:id" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
