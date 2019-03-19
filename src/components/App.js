/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Header, Card} from './';
// import Card from './Card';

export default class App extends Component {
componentWillMount(){
      firebase.initializeApp({
        apiKey: "<API_KEY>",
        authDomain: "<PROJECT_ID>.firebaseapp.com",
        databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
        projectId: "<PROJECT_ID>",
        storageBucket: "<BUCKET>.appspot.com",
        messagingSenderId: "<SENDER_ID>",
      });
}

    render() {
        return (<View>
            <Header headerText={"Auth"}>
            </Header>
            <Card>
                <Text>Hello Brother!</Text>
            </Card>
        </View>);
    }
}