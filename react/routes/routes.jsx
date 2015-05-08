import React from 'react';
import { Route } from 'react-router';
import { Main } from './Main';

import { Example } from './example/Example';

var routes = (
  <Route handler={Main} >
    <Route name="example" path="/" handler={Example} />
  </Route>
);

export { routes };
