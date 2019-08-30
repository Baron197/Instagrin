import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from '@firebase/app';
import Main from './Main';

class AppInit extends Component {
    componentDidMount() {
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyC7lWrGGBcWJaiap-590z1xATnGUYKV_Mc",
            authDomain: "instagrin-c25c5.firebaseapp.com",
            databaseURL: "https://instagrin-c25c5.firebaseio.com",
            projectId: "instagrin-c25c5",
            storageBucket: "instagrin-c25c5.appspot.com",
            messagingSenderId: "974257372915",
            appId: "1:974257372915:web:6bacb3e657269775"
        };
        // Initialize Firebase
        if(!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    render() {
        return (
            <Main />
        )
    }
}

export default AppInit;