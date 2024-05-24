import React, { useContext, useEffect } from 'react'
import { Dimensions, Image, SafeAreaView, StyleSheet, View } from 'react-native'
import CustomText from '../components/CustomText';
import { StandingsTable } from '../components/TournamentSelectedScreen/StandingsTable';
import { useTeamsTournaments } from '../hooks/useTeamsTournaments';
import { globalStyles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import { BackScreenButton } from '../components/Common/BackScreenButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const TournamentSelectedScreen = () => {
  const {loadTournaments,teamsTournamentResponse}=useTeamsTournaments()
  const {authState}=useContext(AuthContext)

  useEffect(() => {// load League and Tournament Selected
    loadTournaments(authState.tournamentSelected!)
  }, [])
  
  return (
    <SafeAreaView style={localStyles.mainContainer}>
      <BackScreenButton/>
      <View style={localStyles.titleContainer}>
        <View style={localStyles.imageContainer}>
                <Image
                style={localStyles.posterImage}
                source={{
                    uri:authState.leagueSelected?.logo_url.trim()
                }}
                />
        </View>
        <CustomText style={localStyles.title}>
                  {authState.tournamentSelected?.name}
                </CustomText>
      </View>
        {
           teamsTournamentResponse && teamsTournamentResponse!.data.length>0?
          <StandingsTable
                    teamsTournamentsResponse={teamsTournamentResponse}
                  />
          :
          <View style={localStyles.noDataShow}>
          <CustomText style={localStyles.noDataText}>
            No hay equipos disponibles para mostrar
          </CustomText>
        </View>
        }
       

    </SafeAreaView>
  )
}

const localStyles = StyleSheet.create({
  mainContainer:{
      flex:1,
      backgroundColor:globalStyles.colors.battleshipGray3,
  },
  headerContainer:{
      width:width,
      paddingVertical:height*0.01,
      justifyContent:"flex-start",
      alignItems:'flex-start',
  },
  titleContainer:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    paddingTop:height*0.025  
  },
  imageContainer:{
    width:width*0.33,
    height:width*0.33,
    marginBottom:height*0.005
  },
  posterImage:{
      flex:1,
      borderRadius:15,
      resizeMode:'contain',
  },
  title:{
    alignSelf:'center'
  },
  noDataShow:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  noDataText:{
    fontSize:height*0.023
  }
});