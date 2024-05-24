import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react'
import { View,Text, StyleSheet, Image, Dimensions, ActivityIndicator, Alert, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomText from '../components/CustomText';
import globalSettings from '../globalSettings'
import { globalStyles } from '../theme/appTheme';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
      setTimeout(() => {
          navigation.navigate("SelectLeagueScreen" as never)

      }, 1000);
    }, [])
    
  return (
    <SafeAreaView style={localStyles.mainContainer}>
        <View style={localStyles.centerContainer}>
        
            <View style={localStyles.imageContainer}>
                <Image
                style={localStyles.posterImage}
                source={{
                    uri:globalSettings.Logo.uri
                }}
            />
            </View>
            <View style={localStyles.dataContainer}>
                <ActivityIndicator
                    color={globalStyles.colors.hampton5}
                    size='large' 
                    animating={true}
                    />
                <CustomText>
                    Cargando partidos
                </CustomText>
                
            </View>
            
            
    </View>
    </SafeAreaView>
    
  )
}
const localStyles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:globalStyles.colors.battleshipGray3
    }, 
    centerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:-height*0.1
    },
    imageContainer:{
        width:width*0.6,
        height:width*0.6,
    },
    posterImage:{
        flex:1,
        borderRadius:18,
    },
    dataContainer:{
        paddingTop:height*0.07
    }
});