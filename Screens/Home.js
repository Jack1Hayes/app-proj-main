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
    BackToHome,
    TitleforPages
    
} from '../component/styles';

// colors
const {brand, darklight, primary} = Colors;


const Home = ({navigation, route}) => {
    //const { name, email } = route.params;



    return (
            <>
            <StatusBar style = "light" />
            <InnerContainer>  
            <WelcomeContainer>  
            <BackToHome onPress = {() => navigation.navigate('Home')}> 
                <WelcomeImage resizeMode="cover" source={require('./../assets/icon.png')} /> 
            </BackToHome>
            <TitleforPages welcome={true}> Home </TitleforPages>
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
                

                <BetScrollView onPress = {() => navigation.navigate('Betcheck')}>
                <       BetNameHomeText>
                            Bet Name
                        </BetNameHomeText>
                        <BetInPlayText>
                            Finished
                        </BetInPlayText>
                        <BetContentsHomeText>
                            Host Name
                        </BetContentsHomeText>
                        <BetContentsHomeText>
                            Your Pick
                        </BetContentsHomeText>
                        <BetContentsHomeText>
                            Stake
                        </BetContentsHomeText>
                        <BetContentsHomeText>
                            # players
                        </BetContentsHomeText>
                        <BetContentsHomeText>
                            Bet ID
                        </BetContentsHomeText>

                </BetScrollView>



                <StyledFormArea>                        
                        <BetButtonView>
                        <NewBetStyledButton  onPress = {() => navigation.navigate('Makebet')}
                        >
                            <ButtonText>
                                New Bet
                            </ButtonText>
                        </NewBetStyledButton>
                        <JoinBetStyledButton onPress={() => {
                            navigation.navigate('Joinbet');
                        }}
                        >
                            <ButtonText>
                                Join Bet
                            </ButtonText>
                        </JoinBetStyledButton>
                        </BetButtonView>
                    </StyledFormArea>
                </WelcomeContainer>
                         
            </InnerContainer>

            
        </>
    );
};  

export default Home;