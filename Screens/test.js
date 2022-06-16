import CheckboxList from 'rn-checkbox-list';
import React from 'react'

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
    OptionsListContainer

} from './../component/styles';
import { ScrollView } from 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, ActivityIndicator, TextInput, Keyboard} from 'react-native'

const test = () => {

const data =
[{id: 1, name: 'option 1' },
{ id: 2, name: 'option 2' },
{ id: 3, name: 'option 3' }];

return (

<OptionsListContainer>
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
</OptionsListContainer>

)
};


export default test;