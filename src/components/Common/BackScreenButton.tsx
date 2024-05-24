import React from 'react'
import { Dimensions, StyleSheet, Platform, TouchableOpacity, Alert } from 'react-native';
import { View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons';
import { globalStyles } from '../../theme/appTheme';
import { useNavigation } from '@react-navigation/core';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export const BackScreenButton = () => {
    const navigation = useNavigation()
  return (
    <View style={localStyles.mainContainer}>
        <TouchableOpacity
        onPress={()=>{navigation.goBack()}}>
             <Icon  style={localStyles.icon}     name="chevron-back-circle-outline"  
                    size={height*0.045} 
                    color={globalStyles.colors.hampton5} />
        </TouchableOpacity>
       
    </View>
  )
}

const localStyles = StyleSheet.create({
    mainContainer:{
        flexDirection:'row',
        
    },
    icon:{
        paddingLeft:Platform.OS==="ios"? width*0.05:width*0.02,
        paddingTop:Platform.OS==="ios"? height*0.0:height*0.02
    }
});