import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './';

class LoginForm2 extends Component {
    state = { email: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                    placeholder="user@gmail.com"
                    label="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}/>
                </CardSection>
                <CardSection>
                    <Input secureTextEntry placeholder="Password" label="Password"/>
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                     </Button>
                </CardSection>
            </Card>
        );
    }
}

export { LoginForm2 };