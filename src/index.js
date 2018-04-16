import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import RoutesConfig from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import routes from './app/config/Routes';
import Dashboard from './app/screens/Dashboard/index';
import Radium, {StyleRoot} from "radium";


ReactDOM.render(
    <StyleRoot>
    <BrowserRouter>
        <div>
            <Route path="/" component={Dashboard} />
        </div>
    </BrowserRouter>
    </StyleRoot>, 
    document.getElementById('root'));
registerServiceWorker();


/*
https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
http://fraserxu.me/react-chartist/
https://formidable.com/open-source/radium/docs/api/

*/