import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import Dashboard from './app/screens/Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={Dashboard} />
        </div>
    </BrowserRouter>, 
    document.getElementById('root'));
registerServiceWorker();
