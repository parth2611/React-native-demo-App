import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import background from '../Images/1920x1080-453156-underwater-background-hd.jpg';
import AppLogo from '../Images/user.png';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Register from'./Register';
import HomeComponent from './HomeComponent';

export class Login extends Component {
   
    static navigationOptions = {
        header: null,
    };
   
    render() {
        return (
            <ImageBackground
                source={background}
                style={{ width: '100%', height: '100%' }}>
                <View style={styles.container}>

                    <View style={styles.textFiends}>

                        <Image
                            style={styles.logo}
                            source={AppLogo}

                        />

                    <View style={{marginTop:10}}>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry
                            ref={(input) => this.passwordInput = input}
                            returnKeyType="go"
                        />


                        <TouchableOpacity style={styles.buttonContainer}
                            onPress={() => this.props.navigation.navigate('Home')}>

                        <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.buttonContainerRegister}
                        onPress={() => this.props.navigation.navigate('Register')} >

                         <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ImageBackground>
    
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <Stack />
        );
    }
}

const AppStackNavigator = createStackNavigator({
    Login: Login,
    Register: Register,
    Home: HomeComponent
})

const Stack = createAppContainer(AppStackNavigator);



const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 20,
        height: 50,
        fontSize: 25,
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#1abc9c',
        color: '#34495e'
    },
    buttonContainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#4682B4',
        paddingVertical: 10,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20,
    },
    logo: {
        height: 150,
        width: 150,
        alignSelf: 'center',
    },
    buttonContainerRegister: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#4682B4',
        paddingVertical: 5,
        justifyContent: 'center',
        marginTop: 30,
    }
});