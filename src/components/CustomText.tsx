import React from 'react'
import { StyleProp, StyleSheet,Text, TextStyle } from "react-native";
import { globalStyles } from '../theme/appTheme';
interface Props{
    style?: StyleProp<TextStyle>
    children:any
}
export default function CustomText(Props:Props){
    const textStyles =[
        localStyles.textStyle,
    ]
    return(
        <Text style={[textStyles, Props.style]}>
            {Props.children}
        </Text>
    )
}

const localStyles = StyleSheet.create({
    textStyle:{
        color:globalStyles.colors.hampton5,
        fontSize:globalStyles.textSizes.medium
    }
});