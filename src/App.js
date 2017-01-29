import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        OY!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
