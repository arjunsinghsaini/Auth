/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Header, Card, LoginForm} from './';
import firebase from 'firebase';
// import Card from './Card';

export default class App extends Component {
componentWillMount(){
      firebase.initializeApp({
        apiKey: "AIzaSyCPYV7pIGRNGsCx230TiwLe2tHPbj79sIQ",
        authDomain: "auth-109c3.firebaseapp.com",
        databaseURL: "https://auth-109c3.firebaseio.com",
        projectId: "auth-109c3",
        storageBucket: "auth-109c3.appspot.com",
        messagingSenderId: "741596114223"
      });
}

    render() {
        return (<View>
            <Header headerText={"Auth"}>
            </Header>
            <Card>
               
            </Card>
        </View>);
    }
}