import React, { useEffect } from 'react'
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { Data, IncludedAttributes, MatchesTournamentsResponse } from '../../interfaces/MatchesTournamentsResponse';
import { MatchPosterItem } from './MatchPosterItem';

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;


interface Props{
  data:Data[],
  getTeamIncludedByID: (teamID: string) => IncludedAttributes | undefined
}

export const MatchesInTournamentFlatList = ({data,getTeamIncludedByID}:Props) => {
  useEffect(() => {
  }, [])
  
  return (
    <FlatList style={localStyles.mainContainer}
        data={data}
        horizontal={false}
        keyExtractor={(item) => item.id}
        renderItem={({item})=> (<MatchPosterItem 
                                  item={item} 
                                  includedAttributesLocal={getTeamIncludedByID(item.attributes.local_team_id)!}  
                                  includedAttributesVisitor={getTeamIncludedByID(item.attributes.visitor_team_id)!}  
                                  />)
        } 
    >
        
    </FlatList>
  )
}

const localStyles = StyleSheet.create({
    mainContainer:{
      flex:1
    },
    
});