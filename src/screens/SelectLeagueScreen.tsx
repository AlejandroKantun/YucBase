import React, { useState } from 'react'
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../theme/appTheme';
import { useLeagues } from '../hooks/useLeagues';
import { LeaguesCarrousel } from '../components/SelectLeagueScreen/LeaguesCarrousel';
import { TournamentsFlatList } from '../components/SelectLeagueScreen/TournamentsFlatList';
import { useTournaments } from '../hooks/useTournaments';
import { League } from '../interfaces/LeagueResponse';
import CustomText from '../components/CustomText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const SelectLeagueScreen = () => {
const {leagues}= useLeagues();
const {tournaments,loadTournaments,isLoadingTournaments}=useTournaments();
const [leagueSelected, setLeagueSelected] = useState<League|undefined>()
  return (
            <SafeAreaView style={localStyles.mainContainer}>
                <View style={localStyles.headerContainer}>
                    <CustomText> Selecciona un torneo</CustomText>
                </View>
                <LeaguesCarrousel
                    data={leagues}
                    setLeagueSelected={setLeagueSelected}
                    loadTournaments={loadTournaments}
                />
                {
                    isLoadingTournaments?
                    <View   style={{paddingTop:height*0.05}}>
                         <ActivityIndicator
                            color={globalStyles.colors.hampton5}
                            size='large' 
                            animating={true}
                            />
                    </View>
                    :<TournamentsFlatList
                    data={tournaments}
                    leagueSelected={leagueSelected}
                />
                }
                
            </SafeAreaView>
    )
}

const localStyles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:globalStyles.colors.battleshipGray3,
        alignItems:'center',
        alignSelf:'center'
    },
    headerContainer:{
        width:width,
        paddingVertical:height*0.01,
        justifyContent:"flex-start",
        alignItems:'flex-start',
    }
});