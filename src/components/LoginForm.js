import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Icon, Button } from 'react-native-elements';

class LoginForm extends Component {
    state = { passHidden : true }

    render() {
        const { containerStyle, inputStyle } = styles;
        return (
            <View style={containerStyle}>
                <Text h3 h3Style={{ color: '#4388d6'}}>Instagrin</Text>
                <View style={inputStyle}>
                    <Input
                        placeholder='Email'
                        leftIcon={
                            <Icon
                                name='email'
                                size={24}
                                color='#4388d6'
                            />
                        }
                    />
                    <Input
                        secureTextEntry={this.state.passHidden}
                        placeholder='Password'
                        leftIcon={
                            <Icon
                                name='lock'
                                size={24}
                                color='#4388d6'
                            />
                        }
                        rightIcon={
                            <Icon
                                name={this.state.passHidden ? 'visibility-off' : 'visibility'}
                                size={24}
                                color={this.state.passHidden ? '#bfc3c9' : '#4388d6'}
                                onPress={() => this.setState({ passHidden: !this.state.passHidden })}
                            />
                        }
                    />
                 </View>
                <Button
                    icon={
                        <Icon
                            name="chevron-right"
                            size={20}
                            color="white"
                        />
                    }
                    title="Login"
                    // type="outline"
                    containerStyle={{ width: '95%', marginBottom: 10 }}
                />
                <Button
                    icon={
                        <Icon
                            name="accessibility"
                            size={20}
                            color="#4388d6"
                        />
                    }
                    title="Register"
                    type="outline"
                    onPress={() => this.props.navigation.navigate('Register')}
                    containerStyle={{ width: '95%' }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    inputStyle: {
        marginTop: 50,
        marginBottom: 100,
        width: '100%'
    }
})

export default LoginForm;