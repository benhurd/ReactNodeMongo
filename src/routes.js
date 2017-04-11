import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './Components/App';
import HomePage from './Components/Home/HomePage';
import ProfileUpdate from './Components/Profile/ProfileUpdate';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="ProfileUpdate" component={ProfileUpdate} />
    </Route>
);