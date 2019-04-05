/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Card, LoginForm2, Button } from './';
import firebase from 'firebase';
import { Spinner } from './Spinner';


export default class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCPYV7pIGRNGsCx230TiwLe2tHPbj79sIQ",
            authDomain: "auth-109c3.firebaseapp.com",
            databaseURL: "https://auth-109c3.firebaseio.com",
            projectId: "auth-109c3",
            storageBucket: "auth-109c3.appspot.com",
            messagingSenderId: "741596114223"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return <Button style ={{height:50}} onPress={()=> firebase.auth().signOut()}>
                    Sign Out
                    </Button>;
            case false:
                return (<LoginForm2 />);
            default:
            return<Spinner size="large"/>
        }

    }

    render() {
        return (<View>
            <Header headerText="Auth">
            </Header>
            {this.renderContent()}

        </View>);
    }
}