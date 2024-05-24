import React from 'react'
import { StyleSheet, Dimensions, Image } from 'react-native';
import { View } from 'react-native'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { Data, IncludedAttributes } from '../../interfaces/MatchesTournamentsResponse'
import { globalStyles, toHex } from '../../theme/appTheme';
import CustomText from '../CustomText'
import globalSettings from '../../globalSettings';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

interface Props{
    item: Data,
    includedAttributesLocal:IncludedAttributes,
    includedAttributesVisitor:IncludedAttributes,
}

export const MatchPosterItem = ({item,includedAttributesLocal,includedAttributesVisitor}:Props) => {
  return (
    <View style={localStyles.mainContainer}>
          <View style= {localStyles.teamPoster}>
            <CustomText style={localStyles.teamNameText}>{includedAttributesLocal.name}</CustomText>
            <Image 
                style={localStyles.posterImage}
                source={{
                    uri:includedAttributesLocal.logo_url?includedAttributesLocal.logo_url.toString().trim():globalSettings.Logo.uri
                }}></Image>
            <CustomText>{item.attributes.local_hits}</CustomText>
          </View>
          <View style= {localStyles.iconContainer}>
              <Icon     name="swap-horizontal-outline"  
                      size={height*0.045} 
                      color={globalStyles.colors.hampton5} />
              <CustomText style={localStyles.fieldText}>{item.attributes.field_name?item.attributes.field_name:"Campo \n no disponible"}</CustomText>
              <CustomText style = {localStyles.dateText}>{item.attributes.game_date}</CustomText>
          </View>
          <View style= {localStyles.teamPoster}>
          <CustomText style={localStyles.teamNameText}>{includedAttributesVisitor.name}</CustomText>
            <Image 
                style={localStyles.posterImage}
                source={{
                    uri:includedAttributesVisitor.logo_url?includedAttributesVisitor.logo_url.toString().trim():globalSettings.Logo.uri
                }}></Image>
            <CustomText> {item.attributes.visitor_hits}</CustomText>
          </View>  
                
    </View>
  )
}

const localStyles  = StyleSheet.create({
    mainContainer:{
        flex:1,
        flexDirection:'row',
        paddingVertical:height*0.005,
        marginVertical:height*0.01,
        width:width*0.95,
        alignSelf:"center",
        justifyContent:'space-around',
        borderRadius:8,
        backgroundColor:globalStyles.colors.everglade1+ toHex(127),
        borderWidth:1,
        borderColor:globalStyles.colors.hampton5
    },
    teamPoster:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:(width*0.90)*0.33

    },
    posterImage:{
        width:width*0.23,
        height:width*0.23,
        resizeMode:'contain'
    },
    iconContainer:{
        alignItems:'center',
        justifyContent:'center',
        width:(width*0.90)*0.33
    },
    fieldText:{
        textAlign:'center',
        fontSize:height*0.015
    },
    dateText:{
        textAlign:'center',
        fontSize:height*0.013
    },
    teamNameText:{
        fontSize:height*0.016
    }
})