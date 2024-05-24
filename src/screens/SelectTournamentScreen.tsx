import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { View,Text, Image, StyleSheet,FlatList, Button } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigator'

import { tournamentData } from '../data/devData';
import { TournamentFlatlistItem } from '../components/TournamentFlatlistItem';

interface Props extends StackScreenProps<RootStackParams,'SelectTournamentScreen'>{}

export const SelectTournamentScreen = ({route,navigation}:Props) => {
  const League = route.params
  console.log(League)
  return (
    <View>
      <View style={localStyles.viewImageContainer}>
       <Image
          style={localStyles.leaguePosterImage}
          source={{
              uri:League.logo_url
          }}
        />
      </View >
       <View >
            <Text style={localStyles.leagueTittleText}>
                    SelectTournamnet {League.name}
            </Text>
       </View>
       <View>
          <FlatList
            data={tournamentData}
            renderItem={({index}) => (
            <TournamentFlatlistItem tournament={tournamentData[index]}/>
            )}
          />
       </View>
       
    </View>
  )
}

const localStyles = StyleSheet.create({
  viewImageContainer:{
    alignItems:'center',
    paddingTop:15,
    paddingBottom:10,
  },
  leaguePosterImage:{
    width:150,
    height:150,
    borderRadius:18,
  },
 
  leagueTittleText:{
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  }
});