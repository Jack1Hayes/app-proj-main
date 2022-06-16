import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
//formik
import {Formik} from 'formik'
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
import {View, TouchableOpacity, ActivityIndicator} from 'react-native'
// colors
const {brand, darklight, primary} = Colors;

//DT picker
import DateTimePicker from '@react-native-community/datetimepicker';

//avoid wrapping
import KeyboardAvoidingWrapper from './../component/KeyboardAvoidingWrapper';

//API client
import axios from 'axios';

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2001, 0, 1));
    const [message, setMessage] = useState();
    const [messgeType, setMessageType] = useState();

    // Actual date of birth

    const [dob, setDob] = useState()

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate  || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    };

//form handling
    const handleSignup = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = 'https://young-citadel-23222.herokuapp.com/User/signup';

        axios
        .post(url, credentials)
        .then((response) => {
            const result = response.data;
            const{message, status, data} = result;

            if (status == 'SUCCESS') {
                navigation.navigate('Home', { ...data });
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


    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style = "dark" />
            <InnerContainer>
                <PageTitle>Wanna Bet</PageTitle>
                <SubTitle>Account Signup</SubTitle>
                {show &&(
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
                )}
                <Formik
                    initialValues={{name: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        values = {...values, dateOfBirth: dob};
                        if (values.email == "" ||
                         values.password == "" ||
                         values.name == "" ||
                         values.dateOfBirth == "" || 
                         values.confirmPassword == ""
                         ) {
                            handleMessage('Please fill in all fields');
                            setSubmitting(false);
                         
                        } else if (values.password !== values.confirmPassword) {
                            handleMessage('Passwords do not match');
                            setSubmitting(false);
                        } 
                        else {
                            handleSignup(values, setSubmitting);
                        }                    
                    }}
                >   
                    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFormArea>
                        <MytextInput
                            label='Userame'
                            icon = 'person'
                            placeholder = 'WannaBet123'
                            placeholderColor = {darklight}
                            onChangeText = {handleChange('name')}
                            onBlur = {handleBlur('name')}
                            value = {values.name}

                        />
                        <MytextInput
                            label='Email-Address'
                            icon = 'mail'
                            placeholder = 'xxx@gmail.com'
                            placeholderColor = {darklight}
                            onChangeText = {handleChange('email')}
                            onBlur = {handleBlur('email')}
                            value = {values.email}
                            keyboardType = 'email-address' 
                        />
                        <MytextInput
                            label='Date of Birth'
                            icon = 'calendar'
                            placeholder = 'yyyy.mm.dd'
                            placeholderColor = {darklight}
                            onChangeText = {handleChange('dateOfBirth')}
                            onBlur = {handleBlur('dateOfBirth')}
                            value = {dob ? dob.toDateString() : ''}
                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker}

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

                        <MytextInput
                            label='Confirm Password'
                            icon = 'lock'
                            placeholder = '********'
                            placeholderColor = {darklight}
                            onChangeText = {handleChange('confirmPassword')}
                            onBlur = {handleBlur('confirmPassword')}
                            value = {values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true} 
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox type={messgeType}> {message}</MsgBox>

                        {!isSubmitting && ( 
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Signup</ButtonText>
                        </StyledButton>
                        )}

                        {isSubmitting && (
                        <StyledButton disabled={true}>
                            <ActivityIndicator size = 'large' color={primary}/>
                        </StyledButton>
                        )}
                        <Line/>
                        <ExtraView>
                            <ExtraText>Already have an account already?</ExtraText>
                            <TextLink onPress = {() => navigation.navigate('Login')}>
                                <TextLinkContent> Login</TextLinkContent>
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

const MytextInput = ({label, isPassword, icon, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (
        <View>       
            <Lefticon>
                <Octicons name={icon} size={30} colors={brand} />
            </Lefticon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props} />
                </TouchableOpacity>
            )}
            {isPassword && (
                <Righticon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30}
                     color={darklight}/>
                </Righticon>
            )}
        </View>
    );
    
};

export default Signup;