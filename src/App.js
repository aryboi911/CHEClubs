import React from 'react';
import { HomePage } from './HomePage/HomePage';
import { Route, Switch} from 'react-router-dom';
import {SearchResults} from './SearchResults/SearchResults';

function App() {
  return (
    <Switch>
      <Route path = '/clubs+list' component={SearchResults}/>
      <Route path = '/search' component={SearchResults}/>
      <Route path = '/' component={HomePage}/>
    </Switch>
  );
}

export default App;
