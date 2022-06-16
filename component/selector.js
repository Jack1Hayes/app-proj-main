import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Options selecter view

import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {
    OptionsViewInner,
    OptionsLeft,
    InnerOptionsText,
    SquareView,
    CircleView

} from './../component/styles';
const OptionsComp = (props) => {
    return (

        <OptionsViewInner>
            <OptionsLeft>
            <InnerOptionsText>
                {props.text}
            </InnerOptionsText>
            </OptionsLeft>
            <CircleView></CircleView>
        </OptionsViewInner>
    );
}

export default OptionsComp;