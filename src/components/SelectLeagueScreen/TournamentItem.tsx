import React, { useContext } from 'react'
import { Dimensions, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Tournament } from '../../interfaces/TournamentsResponse';
import CustomText from '../CustomText';
import { globalStyles } from '../../theme/appTheme';
import { League } from '../../interfaces/LeagueResponse';
import { useNavigation } from '@react-navigation/core';
import { AuthContext } from '../../context/AuthContext';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

interface Props{
    tournament:Tournament,
    leagueSelected:League|undefined
}

export const TournamentItem = ({tournament,leagueSelected}:Props) => {
    const {selectTournament,selectLeague} = useContext(AuthContext)

    const navigation=useNavigation()
  return (
      <TouchableOpacity 
        style={localStyles.mainContainer}
        onPress={()=>{
            selectTournament(tournament);
            selectLeague(leagueSelected!);
            navigation.navigate("BottomTabsTournament" as never)}}>
        <CustomText style={localStyles.tournamentName}>{tournament.name}</CustomText>
        <CustomText style={localStyles.detailTournament}> Sede :{leagueSelected?.location}</CustomText>
        <CustomText style={localStyles.detailTournament}> Equipos jugando :{tournament.number_of_teams}</CustomText>
        <CustomText style={localStyles.detailTournament}> {tournament.status==='in_progress'?'Jugandose actualmente':'Finalizado'}</CustomText>
      </TouchableOpacity>
  )
}

const localStyles = StyleSheet.create({
    mainContainer:{
        justifyContent:'center',
        alignItems:'center',
        width:width*0.9,
        borderWidth:1,
        borderColor:globalStyles.colors.hampton5,
        borderRadius:10,
        paddingVertical:height*0.01,
        backgroundColor:globalStyles.colors.mineralGreen2+'80',
        marginVertical:height*0.006
    },
    tournamentName:{
        fontSize:globalStyles.textSizes.medium
    },
    detailTournament:{
        fontSize:globalStyles.textSizes.small
    }
});