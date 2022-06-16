import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {Ionicons} from '@expo/vector-icons';
import {View, Text, TouchableOpacity} from 'react-native';


import {
    InnerContainer, 
    StyledFormArea, 
    ButtonText,
    Colors, 
    WelcomeContainer,
    WelcomeImage,
    WelcomeTitle,
    WelcomeSubTitle1,
    WelcomeSubTitle2, 
    DepositStyledButton,
    SettingsIcon,
    NewBetStyledButton,
    JoinBetStyledButton,
    BetButtonView,
    BetScrollView, 
    BetNameHomeText,
    BetContentsHomeText,
    BetInPlayText,
    BetCheckView,
    BackToHome,
    TitleforPages
    
} from '../component/styles';

// colors
const {brand, darklight, primary} = Colors;


const Betcheck = ({navigation, route}) => {
    //const { name, email } = route.params;



    return (
            <>
            <StatusBar style = "light" />
            <InnerContainer>  
            <WelcomeContainer>
                <BackToHome onPress = {() => navigation.navigate('Home')}> 
                <WelcomeImage resizeMode="cover" source={require('./../assets/icon.png')} /> 
                </BackToHome>   

                <TitleforPages welcome={true}> Bet name </TitleforPages>
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
                <BetCheckView>
                <BetButtonView>
                        <NewBetStyledButton  onPress = {() => navigation.navigate('Betcheck')}
                        >
                            <ButtonText>
                                Settle
                            </ButtonText>
                        </NewBetStyledButton>
                        <BetInPlayText>
                            Finished
                        </BetInPlayText>
                </BetButtonView>

                        <BetContentsHomeText>

                        </BetContentsHomeText>
                        <BetContentsHomeText>
                            Host Name
                        </BetContentsHomeText>
                        <BetContentsHomeText>
                            Stake
                        </BetContentsHomeText>
                        <BetContentsHomeText>
                            Bet ID
                        </BetContentsHomeText>
                </BetCheckView>




                <StyledFormArea>
                <BetButtonView>
                        <NewBetStyledButton  onPress = {() => navigation.navigate('Betcheck')}
                        >
                            <ButtonText>
                                Edit
                            </ButtonText>
                        </NewBetStyledButton>
                        <JoinBetStyledButton onPress={() => {
                            navigation.navigate('Login');
                        }}
                        >
                            <ButtonText>
                                Delete
                            </ButtonText>
                        </JoinBetStyledButton>
                </BetButtonView>
                </StyledFormArea>
                </WelcomeContainer>
                         
            </InnerContainer>

            
        </>
    );
};  

export default Betcheck;