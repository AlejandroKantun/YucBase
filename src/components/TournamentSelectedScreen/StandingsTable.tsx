import React, { useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet } from 'react-native';
import { View } from 'react-native'
import { DataTable } from 'react-native-paper'; 
import { TeamsTournamentsResponse} from '../../interfaces/TeamsTournamentsResponse';
import { globalStyles } from '../../theme/appTheme';
import CustomText from '../CustomText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const tableWidth= width*0.9;


interface Props{
  teamsTournamentsResponse:TeamsTournamentsResponse | undefined

}
const headersTitle:string[]=['Pos','Equipo','JJ','JG','JP','PCT']

export const StandingsTable = ({teamsTournamentsResponse}:Props) => {
  useEffect(() => {
    //Alert.alert(JSON.stringify(teamsTournamentsIncluded))
  }, [])
 
  return (
    <View style={localStyles.mainContainer}>
    <DataTable style={localStyles.tableContainer}> 
      <DataTable.Header style={localStyles.tableHeader}> 
        {headersTitle.slice().map((item) => (
            <DataTable.Title style={item==='Equipo'?{flex:3}:{flex:1}}>
                <CustomText style={ localStyles.headerCellText}>{item}
                </CustomText>
            </DataTable.Title> 
        ))}
      </DataTable.Header> 
      <ScrollView>
      {teamsTournamentsResponse?.data.slice().map((item) => (
        <View>
        <DataTable.Row key={item.attributes.id}>
          <DataTable.Cell ><CustomText style ={localStyles.dataCellText}>{item.attributes.position?item.attributes.position:'N/A'}
                          </CustomText>
          </DataTable.Cell>
          <DataTable.Cell style ={{flex:3}} > 
                          <CustomText style ={localStyles.dataCellText}>
                            {teamsTournamentsResponse?.included.reduce((prev,current)=>
                            prev=prev+ (current.attributes.id===item.relationships.team.data.id? current.attributes.name :'' )
                            ,'')}
                          </CustomText>
          </DataTable.Cell>
          <DataTable.Cell  ><CustomText style ={localStyles.dataCellText}>{item.attributes.played_games}</CustomText></DataTable.Cell>
          <DataTable.Cell  ><CustomText style ={localStyles.dataCellText}>{item.attributes.lost_games}</CustomText></DataTable.Cell>
          <DataTable.Cell  ><CustomText style ={localStyles.dataCellText}>{item.attributes.tied_games}</CustomText></DataTable.Cell>
          <DataTable.Cell  ><CustomText style ={localStyles.dataCellText}>{item.attributes.average}</CustomText></DataTable.Cell>
        </DataTable.Row>
        </View>
      ))}
      </ScrollView>
    </DataTable> 
    </View>
  )
}

const localStyles = StyleSheet.create({
      mainContainer:{
        flex:1
      },
      tableContainer: { 
        alignSelf:'center',
        width:tableWidth,
        backgroundColor:globalStyles.colors.mineralGreen2,
      }, 
      tableHeader: { 
        backgroundColor: globalStyles.colors.swampGreen4, 
      
      },
      headerCellText:{
        color:globalStyles.colors.mineralGreen2,
        fontSize:height*0.018
      },
      dataCellText:{
        fontSize:height*0.015,
      }
    
});