import React,{Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import background from '../Images/1920x1080-453156-underwater-background-hd.jpg';
import AppLogo from '../Images/user.png';


export default class Register extends Component {

    static navigationOptions = {
        header: null,
    };

        render(){
            return(
                <ImageBackground
                    source={background}
                    style={{ width: '100%', height: '100%' }}
                >
                    <View style={styles.container}>

                        <View style={styles.registerForm}>

                            <Image
                                style={styles.logo}
                                source={AppLogo}
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Enter Name"
                                returnKeyType="next"
                                onSubmitEditing={() => this.emailInput.focus()}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Your Email"
                                returnKeyType="next"
                                onSubmitEditing={() => this.passwordInput.focus()}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                ref={(input) => this.emailInput = input}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Password"
                                secureTextEntry
                                ref={(input) => this.passwordInput = input}
                                returnKeyType="go"
                            />
                            <TouchableOpacity style={styles.buttonContainer}
                                onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <Text style={styles.buttonText}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            );
        }

}



const styles = {
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '1abc9c',
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
        color: '#FFFFFF',
        fontSize: 20,
    }, 
    logo: {
        height: 150,
        width: 150,
        alignSelf: 'center',
    },
}