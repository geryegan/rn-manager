import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDCnU3E2xt_8M1kd87wmcqM0DJXObtXs4w',
            authDomain: 'employee-manager-bc193.firebaseapp.com',
            databaseURL: 'https://employee-manager-bc193.firebaseio.com',
            storageBucket: 'employee-manager-bc193.appspot.com',
            messagingSenderId: '617202847716'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
