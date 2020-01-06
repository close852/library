import React from 'react';
import { Route, Switch } from 'react-router-dom'

import BookView from 'components/BookView'
import Portal from 'components/Portal'
import TopMenu from 'components/TopMenu';

export default function App() {

  return (
    <div>
      <TopMenu/>
      <Switch>
          <Route exact path="/" component={Portal}/>
          <Route path="/book/view/:id" component={BookView}/>
      </Switch>
    </div>
  );
}
