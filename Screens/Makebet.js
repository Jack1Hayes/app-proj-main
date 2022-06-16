import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
//formik
import {Formik} from 'formik'
//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
//options selector
import OptionsComp from '../component/selector';

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
    StyledTextInput,
    BackToHome,
    WelcomeImage,
    WelcomeTitle,
    WelcomeSubTitle1,
    WelcomeSubTitle2,
    DepositStyledButton,
    SettingsIcon,
    TitleforPages,
    OptionsText,
    OptionsView,
    OptionsWrapperView,
    ContainerView,
    AddWrapper,
    AddWrapperView,
    OptionsInput

} from './../component/styles';
import {View,Text, TouchableOpacity, ActivityIndicator, TextInput, Keyboard} from 'react-native'
// colors
const {brand, darklight, primary} = Colors;

//avoid wrapping
import KeyboardAvoidingWrapper from './../component/KeyboardAvoidingWrapper';

//API client
import axios from 'axios';


const Makebet = ({navigation}) => {
    const [message, setMessage] = useState();
    const [messgeType, setMessageType] = useState();
    const [option, setOption] = useState();
    const [optionItems, setOptionItems] = useState([]);


//form handling
    const handleNewbet = (credentials, setSubmitting) => {
        handleMessage(null);
        const url = 'https://young-citadel-23222.herokuapp.com/Newbet/newbet';

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

    const handleAddOption = () => {
        Keyboard.dismiss();
        setOptionItems([...optionItems, option])
        setOption(null);
    };

    const deleteTask = (index) =>{
        let itemsCopy = [...optionItems];
        itemsCopy.splice(index, 1);
        setOptionItems(itemsCopy);
    };

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style = "dark" />
            <InnerContainer>
            <BackToHome onPress = {() => navigation.navigate('Home')}> 
                <WelcomeImage resizeMode="cover" source={require('./../assets/icon.png')} /> 
                </BackToHome>   

                <TitleforPages welcome={true}> New Bet </TitleforPages>
                <WelcomeSubTitle1 welcome={true}>{'Mrs Simpson' }</WelcomeSubTitle1>
                <WelcomeSubTitle2 welcome={true}>{'Balance'}</WelcomeSubTitle2>
                <DepositStyledButton>
                    <ButtonText>
                        Deposit
                    </ButtonText>
                </DepositStyledButton>
                <SettingsIcon>
                    <Ionicons name="settings" size={30} colors={brand} />
                </SettingsIcon>
                
                <Formik
                    initialValues={{betname: '', stake: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        values = {...values, ...optionItems};
                        if (values.betname == "" ||
                         values.stake == ""||
                         optionItems == "" ) {
                            handleMessage('Please fill in all fields');
                            setSubmitting(false);
                        }
                        else {
                            handleNewbet(values, setSubmitting);
                        }                        
                    }}
                >   
                    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFormArea>
                        <MytextInput
                            label='Bet name'
                            icon = 'person'
                            placeholder = 'First goalscorer'
                            placeholderColor = {darklight}
                            onChangeText = {handleChange('betname')}
                            onBlur = {handleBlur('betname')}
                            value = {values.name}

                        />
                        <MytextInput
                            label='Stake'
                            icon = 'cash'
                            placeholder = '£10'
                            placeholderColor = {darklight}
                            onChangeText = {handleChange('stake')}
                            onBlur = {handleBlur('stake')}
                            value = {values.email}
                            keyboardType = 'numeric' 
                        />

                
                        <OptionsText>
                             Options
                        </OptionsText>
                        <OptionsView>
                            {
                                optionItems.map((option, index) =>{
                                    return (
                                        <TouchableOpacity  key={index} onPress = {() => deleteTask(index)}>
                                            <OptionsComp text={option}/>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                       
                        </OptionsView>
                        <AddWrapperView>
                            <OptionsInput placeholder={'Option'} value={option} onChangeText={text => setOption(text)} />
                            <TouchableOpacity onPress ={() => handleAddOption()} >
                                <AddWrapper>
                                    <Text>
                                        +
                                    </Text>
                                </AddWrapper>
                            </TouchableOpacity>
                        </AddWrapperView>








                        {!isSubmitting && ( 
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Confirm</ButtonText>
                        </StyledButton>
                        )}

                        {isSubmitting && (
                        <StyledButton disabled={true}>
                            <ActivityIndicator size = 'large' color={primary}/>
                        </StyledButton>
                        )}
                                                <MsgBox type={messgeType}> {message}</MsgBox>
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
                <Ionicons name={icon} size={30} colors={brand} />
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


export default Makebet;