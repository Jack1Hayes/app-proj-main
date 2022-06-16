import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darklight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B941",
    red: "#EF4444",

};

const { primary, secondary, tertiary, darklight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 30}px;
    background-color: ${primary};
`

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;

`

export const WelcomeContainer = styled(InnerContainer)`
    padding:25px;
    padding-top:10px
    justify-content: center;
`

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`

export const Avatar = styled.Image`
    width: 100px;
    height: 100px;
    margin:auto;
    border-radius:50px;
    border-width: 2px;
    border-color: ${secondary}
    margin-bottom: 10px;
    margin-top: 10px;
`

export const WelcomeImage = styled.Image`
    height: 200px;
    width: 170px;
    justify-content: flex-start;
`

export const WelcomeTitle = styled.Text`
    font-size:30px;
    font-weight: bold
    color: ${brand};
    right: 75px;
    top: 38px;
    position: absolute;
    z-index:1; 

`

export const WelcomeSubTitle1 = styled.Text`
    font-size: 18px;
    left: 200px;
    top: 80px;
    position: absolute;
    z-index:1; 
    letter-spacing: 1px;
    color: ${tertiary};
`

export const WelcomeSubTitle2 = styled.Text`
    font-size: 18px;
    left: 200px;
    top: 110px;
    position: absolute;
    z-index:1; 
    letter-spacing: 1px;
    color: ${tertiary};
`
export const DepositStyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 50px;
    width: 120px;
    left: 200px;
    top: 140px;
    position: absolute;
    z-index:1; 
  
`

export const SettingsIcon = styled.View`
    left: 350px;
    top: 155px;
    position: absolute;
    z-index:1; 

`

export const PageTitle = styled.Text`
    font-size:30px;
    align-content: center;
    font-weight: bold
    color: ${brand};
    padding: 10px;

    ${(props) => props.welcome && `
    font-size: 35px;
    `}
`

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight:bold;
    color: ${tertiary};

    ${(props) => props.welcome && `
    margin-bottom: 5px;
    font-weight: normal;
    `}
`

export const StyledFormArea = styled.View`
    width: 90%;
`

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 12px;
    text-align: left;
`

export const Lefticon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index:1; 
`

export const Righticon = styled.View`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index:1; 
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
    
`

export const BetButtonView = styled.View`
    top: 30px;
    flex-direction: row;
    flex-wrap: wrap;

`

export const NewBetStyledButton = styled.TouchableOpacity`
    background-color: ${brand};
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    margin-horizontal: 1.5%;
    padding-horizontal: 8px;
    padding-vertical: 6px;
    border-radius: 4px;
    align-self: flex-start;
    margin-bottom: 6px;
    min-width: 47%;
    text-align: center;   
`

export const JoinBetStyledButton = styled.TouchableOpacity`
    background-color: ${brand};
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    margin-horizontal: 1.5%;
    padding-horizontal: 8px;
    padding-vertical: 6px;
    border-radius: 4px;
    align-self: flex-start;
    margin-bottom: 6px;
    min-width: 47%;
    text-align: center;
`

export const ButtonText = styled.Text`
    color: ${primary}
    font-size: 18px;
    text-align:center;
    ${(props) => props.google == true && `
        padding: 25px;
    `}
`


export const MsgBox = styled.Text`

    text-align:center;
    font-size:13px;
    color: ${props => props.type == 'SUCCESS' ? green : red};

`

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darklight};
    margin-vertical: 1px;
`

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`

export const BetScrollView = styled.TouchableOpacity`
    height: 60%;
    width: 90%;
    top: 15px;
    padding: 10px;
    borderWidth: 5px;
    borderTopLeftRadius: 20px;
    borderTopRightRadius: 20px;
    borderBottomLeftRadius: 20px;
    borderBottomRightRadius: 20px;
`
 export const BetNameHomeText = styled.Text`
    padding: 10px;
    font-weight: bold;
    text-align: center;
    color: ${tertiary};
    font-size: 25px; 
 `
 export const BetContentsHomeText = styled.Text`
    padding: 10px;
    text-align: left;
    color: ${tertiary};
    font-size: 20px; 
`

export const BetInPlayText = styled.Text`
    padding: 10px;
    font-weight: bold;
    text-align: right;
    color: ${tertiary};
    font-size: 25px; 
`

export const BetCheckView = styled.View`
    height: 60%;
    width: 90%;
    top: 15px;
    padding: 10px;

`

export const BackToHome = styled.TouchableOpacity`
    height: 220px;
    width: 170px;
    justify-content: flex-start;
    right: 100px;
`

export const TitleforPages = styled.Text`
    font-size:30px;
    font-weight: bold
    color: ${brand};
    padding: 10px;
    left: 180px;
    top: 20px;
    position: absolute;
    z-index:1; 
    letter-spacing: 1px;


`

export const ContainerView = styled.View`
    flex: 1
    background-color: ${darklight}

`

export const OptionsWrapperView = styled.View`
    padding: 80px;
    padding-horizontal: 20px;
    background-color: ${red};


`

export const OptionsText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    align-content: flex-start;
    

`

export const OptionsViewInner = styled.View`    
    background-color: ${secondary};
    padding: 15px;
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    marginBottom: 20px;
    
    

`
export const OptionsLeft = styled.View`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
`
export const SquareView = styled.View`
    width: 24px;
    height: 24ps;
    background-color: ${brand};
    opacity: 0.4;
    border-radius: 5px;
    margin-right: 15px;
`

export const InnerOptionsText = styled.Text`
    max-width: 100%;
`

export const CircleView = styled.View`
    width: 12px;
    height 12px;
    border-radius: 5px;
    border-color: ${red};
    border-width: 2px;
`

export const OptionsView = styled.View`
    margin-top: 20px;
    margin-bottom: 65px;
    
`

export const OptionsInput = styled.TextInput`
    paddingVertical: 15px;
    paddingHorizontal: 15px;
    background-color: ${primary};
    borderRadius: 60px;
    borderColor: ${brand};
    borderWidth: 1px;
    width: 250px;
`

export const AddWrapper =styled.View`
    width: 60px;
    height: 60px;
    backgroundColor: ${primary};
    borderRadius: 60px;
    justifyContent: center;
    alignItems: center;
    borderColor: ${brand};
    borderWidth: 1px;
`

export const AddWrapperView =styled.View`
    margin-top: 30px;
    margin-bottom: 40px;
    position: absolute;
    bottom: 60px;
    width: 100%;
    flexDirection: row;
    justifyContent: space-around;
    alignItems: center;
    background-color: ${primary};
`

export const OptionsListContainer = styled.View`
    padding-top: 10px;
    width: 100%;
    borderRadius: 20px;
    height:25%;
    border-width: 1px;
    borderColor: ${brand};

`

export const OptionsChoiceListContainer = styled.View`
    padding-top: 10px;
    width: 100%;

    height:35%;
    border-width: 1px;
    borderColor: ${brand};
    borderRadius: 20px;
`