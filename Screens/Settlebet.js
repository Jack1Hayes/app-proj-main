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
    OptionsInput,
    BetContentsHomeText,
    OptionsListContainer,
    OptionsChoiceListContainer

} from './../component/styles';
import {View, Text, TouchableOpacity, ActivityIndicator, TextInput, Keyboard} from 'react-native'
// colors
const {brand, darklight, primary} = Colors;

//avoid wrapping
import KeyboardAvoidingWrapper from './../component/KeyboardAvoidingWrapper';

//API client
import axios from 'axios';

//Checkbox list 
import CheckboxList from 'rn-checkbox-list';
import { ScrollView } from 'react-native-gesture-handler';


const Settlebet = ({navigation}) => {
    const [message, setMessage] = useState();
    const [messgeType, setMessageType] = useState();
    const [option, setOption] = useState();
    const [optionItems, setOptionItems] = useState([]);

const data =
[{id: 1, name: 'option 1' },
{ id: 2, name: 'option 2' },
{ id: 3, name: 'option 3' }];


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



    return (

        <StyledContainer>
            <StatusBar style = "dark" />
            <InnerContainer>
            <BackToHome onPress = {() => navigation.navigate('Home')}> 
                <WelcomeImage resizeMode="cover" source={require('./../assets/icon.png')} /> 
                </BackToHome>   

                <TitleforPages welcome={true}> Settle Bet </TitleforPages>
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

                <BetContentsHomeText>
                    Bet Name
                </BetContentsHomeText>
                <BetContentsHomeText>
                    Total
                </BetContentsHomeText>
                <OptionsChoiceListContainer>
                <ScrollView>
                <CheckboxList
                    theme = 'purple'
                    listItems = {data}
                    onChange={({ ids, items }) => console.log('My updated list :: ', ids, items)}
                    listItemStyle={{ borderBottomColor: '#eee', borderBottomWidth: 1, width: "100%"}}
                    checkboxProp={{ boxType: 'square' }} // iOS (supported from v0.3.0)
                    onLoading={() => <LoaderComponent />}
                />
                </ScrollView>
                </OptionsChoiceListContainer>
                
                <Formik
                    initialValues={{addoption: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        values = {...values};
                        if (values.addoption == "" ) {
                            handleMessage('Please fill in all fields');
                            setSubmitting(false);
                        }
                        else {
                            handleNewbet(values, setSubmitting);
                        }                        
                    }}
                    
                >   

                    {({ handleChange, handleBlur, handleSubmit, values, isSubmitting}) => (<StyledFormArea>



                           
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


export default Settlebet;