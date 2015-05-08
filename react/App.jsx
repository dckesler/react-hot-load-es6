import React from 'react';
import Router from 'react-router';
import { routes } from './routes/routes';

Router.run(routes, function(Handler){
  React.render(<Handler />, document.getElementById('app'));
});
