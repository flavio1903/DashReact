import React from 'react';
import { Router, Route } from 'react-router';
import App from '../index';
import Dashboard from '../screens/Dashboard/index';

const routes = (
  <Route path="/" component={Dashboard}>
  </Route>
)
 
export default routes;