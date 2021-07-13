// Compete rendering of the website, including displaying pages with certain elements in the URL

import React from 'react';
import { HomePage } from './HomePage/HomePage';
import { Route, Switch} from 'react-router-dom';
import {SearchResults} from './SearchResults/SearchResults';
import {ClubsList} from './ClubsList/ClubsList'

function App() {
  return (
    <Switch>
      {/*Pages displayed whent the URL starts with certain components */}
      <Route path = '/clubslist' component={ClubsList}/>
      <Route path = '/search' component={SearchResults}/>
      <Route path = '/' component={HomePage}/>
    </Switch>
  );
}

export default App;