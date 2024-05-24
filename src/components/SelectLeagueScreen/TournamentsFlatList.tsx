import React from 'react'
import { Dimensions, StyleSheet, View,FlatList } from 'react-native';
import { League } from '../../interfaces/LeagueResponse';
import { Tournament } from '../../interfaces/TournamentsResponse';
import CustomText from '../CustomText';
import { TournamentItem } from './TournamentItem';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
interface Props{
    data:Tournament[],
    leagueSelected:League|undefined
}

export const TournamentsFlatList = ({data,leagueSelected}:Props) => {
  return (
    <View style={localStyles.mainContainer}>
        <FlatList
            //ItemSeparatorComponent={ <View style={{margin:5}}></View> }
            data={data}
            horizontal={false}
            keyExtractor={(item) => item.id}
            renderItem={({item,index})=> 
                        <TournamentItem 
                        tournament={item}
                        leagueSelected={leagueSelected}
                        />
            }
        >
            
        </FlatList>
    </View>
  )
}

const localStyles = StyleSheet.create({
    mainContainer:{
        paddingTop:height*0.025
    }
});