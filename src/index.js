import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import routes from './app/config/Routes';
import Dashboard from './app/screens/Dashboard/index';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={Dashboard} />
        </div>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();