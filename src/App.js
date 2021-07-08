import React from 'react';
import { HomePage } from './HomePage/HomePage';
import { Route, Switch} from 'react-router-dom';
import {SearchResults} from './SearchResults/SearchResults';
import {ClubsList} from './ClubsList/ClubsList'

function App() {
  return (
    <Switch>
      <Route path = '/clubslist' component={ClubsList}/>
      <Route path = '/search' component={SearchResults}/>
      <Route path = '/' component={HomePage}/>
    </Switch>
  );
}

export default App;
