import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
//formik
import {Formik} from 'formik';
//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


import {
    StyledContainer, 
    InnerContainer, 
    PageLogo, 
    PageTitle, 
    SubTitle, 
    StyledFormArea, 
    Lefticon, 
    StyledInputLabel, 
    Righticon, 
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    Line, 
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
    StyledTextInput } from './../component/styles';
import {View, ActivityIndicator} from 'react-native';
// colors
const {brand, darklight, primary} = Colors;

// keyboard avoiding view

import KeyboardAvoidingWrapper from './../component/KeyboardAvoidingWrapper';

//API client
import axios from 'axios';

import * as Google from 'expo-google-app-auth';


const Login = ({ navigation }) => {
        const [hidePassword, setHidePassword] = useState(true);
        const [message, setMessage] = useState();
        const [messgeType, setMessageType] = useState();
        const [GoogleSubmitting, setGoogleSubmitting] = useState(false);

        const handleLogin = (credentials, setSubmitting) => {
            handleMessage(null);
            const url = 'https://young-citadel-23222.herokuapp.com/User/signin';

            axios
            .post(url, credentials)
            .then((response) => {
                const result = response.data;
                const{message, status, data} = result;

                if (status == 'SUCCESS') {
                    navigation.navigate('Home', { ...data[0] });
                } else {
                    handleMessage(message, status);
                    
                }
                setSubmitting(false);

            })
            .catch(error => {

                setSubmitting(false);
                handleMessage('An error occured. Check your network and try again')
                console.log()(error.JSON());
            });

        };

        const handleMessage= (messgae, type = 'FAILED') => {
            setMessage(messgae);
            setMessageType(type);

        };

const handleGoogleSignin = () => {
    setGoogleSubmitting(true);
    const config = {iosClientId: '427284821872-bo7ec2gnd4qr1e7sdkl612h88hj4tpa7.apps.googleusercontent.com', 
                    andriodClientId: '427284821872-gfmp4v6rbqeeq9hce74k77gnsj7vatio.apps.googleusercontent.com',
                    
                    
                };
                Google
                .logInAsync(config)
                .then((result) => {
                    const {type, user} = result;

                    if (type == 'success') {
                        const {email, name, photoUrl} = user;
                        handleMessage("Google signin successful", "SUCCESS");
                        setTimeout(() => navigation.navigate('Home', {email, name, photoUrl}, 1000))
                    } else {
                        handleMessage("Google signin was cancelled");
                    }
                    setGoogleSubmitting(false);

                })
                .catch(error => {
                    console.log(error);
                        handleMessage("An error occured. Check your network and try agian");
                        setGoogleSubmitting(false);
                });

};

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style = "dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/icon.png')} />
                <PageTitle>Wanna Bet</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values, { setSubmitting }) => {
                        if (values.email == "" || values.password == "") {
                            handleMessage('Please fill in all fields');
                            setSubmitting(false);
                            
                        } else {
                            handleLogin(values, setSubmitting);
                        }
                                          
                    }}
                >   
                    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (
                    <StyledFormArea>
                        <MytextInput
                            label='Email Address'
                            icon = 'mail'
                            placeholder = 'xxx@gmail.com'
                            placeholderColor = {darklight}
                            onChangeText = {handleChange('email')}
                            onBlur = {handleBlur('email')}
                            value = {values.email}
                            keyboardType = 'email-address' 
                        />

                        <MytextInput
                            label='Password'
                            icon = 'lock'
                            placeholder = '********'
                            placeholderColor = {darklight}
                            onChangeText = {handleChange('password')}
                            onBlur = {handleBlur('password')}
                            value = {values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true} 
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox type={messgeType}> {message}</MsgBox>

                        {!isSubmitting && ( 
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        )}

                        {isSubmitting && (
                        <StyledButton disabled={true}>
                            <ActivityIndicator size = 'large' color={primary}/>
                        </StyledButton>
                        )}

                        <Line/>

                        {!GoogleSubmitting && (
                        <StyledButton google = {true} onPress={handleGoogleSignin}>
                            <Fontisto name='google' color={primary} size = {25}/>
                            <ButtonText google = {true}>Sign in with Google</ButtonText>
                        </StyledButton>
                        )}

                        {GoogleSubmitting && (
                        <StyledButton google = {true} disabled = {true}>
                            <ActivityIndicator size = 'large' color={primary}/>
                        </StyledButton>
                        )}


                        
                        <ExtraView>
                            <ExtraText>Don't have an account already?</ExtraText>
                            <TextLink onPress = {() => navigation.navigate('Signup')}>
                                <TextLinkContent> Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                        
                    </StyledFormArea>
                    )}
                </Formik>                           
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MytextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>       
            <Lefticon>
                <Octicons name={icon} size={30} colors={brand} />
            </Lefticon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <Righticon 
                onPress={() =>{ 
                    setHidePassword(!hidePassword);
                }}
                >
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30}
                     color={darklight}/>
                </Righticon>
            )}
        </View>
    );
    
};

export default Login;