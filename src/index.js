import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Style/Style.css';
import ConfigureStore from './Store/ConfigureStore';
import {Provider} from 'react-redux';
import {LoadProfile} from './Action/ProfileAction';
import '../node_modules/toastr/build/toastr.min.css';

const store =ConfigureStore();
store.dispatch(LoadProfile("benhur.davies@cognizant.com"));

render( 
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>
    ,document.getElementById('app')
    );