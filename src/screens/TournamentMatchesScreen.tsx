import React, { useContext, useEffect } from 'react'
import { View , SafeAreaView, StyleSheet, Dimensions, ActivityIndicator } from 'react-native'
import { BackScreenButton } from '../components/Common/BackScreenButton';
import { globalStyles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import { Image } from 'react-native';
import CustomText from '../components/CustomText';
import { GamesWeekNumberCarrousel } from '../components/TournamentMatchesScreen.tsx/GamesWeekNumberCarrousel';
import { useMatchesTournaments } from '../hooks/useMatchesTournaments';
import Intro from '../Intro';
import { MatchesInTournamentFlatList } from '../components/TournamentMatchesScreen.tsx/MatchesInTournamentFlatList';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const TournamentMatchesScreen = () => {
  const {authState}=useContext(AuthContext)
  const {matchesTournamentsResponse,isLoadingMatchesTournament,loadMatchesTournaments,gameWeekNumbers,matchesByWeek,isLoadingWeeks,getMatchesByWeekNumber,getTeamIncludedByID}=useMatchesTournaments()
  
  useEffect(() => {
    loadMatchesTournaments(authState.tournamentSelected!)
  }, [])
  
  useEffect(() => {
   getMatchesByWeekNumber(gameWeekNumbers[0])
  }, [gameWeekNumbers])
  
  return (
    <SafeAreaView style={localStyles.mainContainer}>
      <BackScreenButton/>
      <View style={localStyles.titleContainer}>
        <View style={localStyles.imageContainer}>
                <Image
                style={localStyles.posterImage}
                source={{
                    uri:authState.leagueSelected?.logo_url
                }}
                />
        </View>
        <CustomText style={localStyles.title}>
                  {authState.tournamentSelected?.name}
        </CustomText>
      </View>
        
        <GamesWeekNumberCarrousel
        data={gameWeekNumbers}
        getMatchesByWeekNumber={getMatchesByWeekNumber}/>
        {
          gameWeekNumbers.length?
          <View style={{flex:1}}>
            {isLoadingWeeks?
              <ActivityIndicator
              color={globalStyles.colors.hampton5}
              size='large' 
              animating={true}
              />
              :
              <MatchesInTournamentFlatList
                data={matchesByWeek}
                getTeamIncludedByID={getTeamIncludedByID}
              />
             }
          </View>
          :
          <View style={localStyles.noDataShow}>
            <CustomText style={localStyles.noDataText}>
              No hay juegos disponibles para mostrar
            </CustomText>
          </View>
        }
        
      
    </SafeAreaView>
  )
}

const localStyles = StyleSheet.create({
    mainContainer:{
      flex:1,
      backgroundColor:globalStyles.colors.battleshipGray3
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
      paddingTop:height*0.005   
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