import React from 'react'
import { View,Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { League } from '../../interfaces/LeagueResponse';
import { globalStyles } from '../../theme/appTheme';
import CustomText from '../CustomText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props{
    league:League;
}


export const LeaguePoster = ({league}:Props) => {

  return (
    <View style={localStyles.mainContainer}>
        <TouchableOpacity 
            activeOpacity={0.8}
            style={localStyles.imageContainer}
        >
            <Image
                style={localStyles.LeaguePosterImage}
                source={{
                    uri:league.logo_url
                }}
            />
        </TouchableOpacity>
        <CustomText style={localStyles.textName}>
                    {league.name}
        </CustomText>
    </View>
  )
}

const localStyles = StyleSheet.create({
    mainContainer:{
        width:width*0.75,
        paddingTop:height*0.01,
    },
    LeaguePosterImage:{
        width:width*0.6,
        height:width*0.6,
        borderRadius:width*0.02,
        resizeMode:'contain',
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    textName:{
        fontSize:globalStyles.textSizes.posterTitle,
        textAlign:'center',
        paddingTop:height*0.02,
        color:globalStyles.colors.everglade1,
        fontWeight:'400'
    }
});

