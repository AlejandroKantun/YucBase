import { createStackNavigator } from '@react-navigation/stack';
import { League } from '../interfaces/LeagueResponse';
import { SelectLeagueScreen } from '../screens/SelectLeagueScreen';
import { SelectTournamentScreen } from '../screens/SelectTournamentScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { TournamentMatchesScreen } from '../screens/TournamentMatchesScreen';
import { BottomTabsTournament } from './bottomTabsTournaments';

//Arguments for navigation
export type RootStackParams={
  SelectLeagueScreen: undefined,
  TournamentMatchesScreen:undefined,
  SplashScreen:undefined,
  TournamentSelectedScreen:undefined,
  BottomTabsTournament:undefined,
  SelectTournamentScreen:League
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator
    
    >
      <Stack.Screen 
        options={{
            headerShown:false
                }} 
        name="SplashScreen" 
        component={SplashScreen} />
      <Stack.Screen 
        options={{
            headerShown:false
                }} 
        name="SelectLeagueScreen" 
        component={SelectLeagueScreen} />
      <Stack.Screen
        options={{
          headerShown:false
                  }} 
        name="TournamentMatchesScreen" 
        component={TournamentMatchesScreen} />  
      <Stack.Screen
        options={{
          headerShown:false
                  }} 
        name="BottomTabsTournament"
        component={BottomTabsTournament}/>
        
    </Stack.Navigator>
  );
}