import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View,TouchableOpacity,Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { TournamentMatchesScreen } from '../screens/TournamentMatchesScreen';
import { TournamentSelectedScreen } from '../screens/TournamentSelectedScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { globalStyles, toHex, styles } from '../theme/appTheme';
import CustomText from '../components/CustomText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

export const BottomTabsTournament=()=>{
  return (
    <View style={{flex:1}}>
      <Tab.Navigator
          tabBar={(props) => <MyTabBar {...props} />}>
            <Tab.Screen
              options={{
              headerShown:false
                      }}  
              name="TournamentSelectedScreen" 
              component={TournamentSelectedScreen} />
            <Tab.Screen
              options={{
              headerShown:false
                      }}  
              name="TournamentMatchesScreen" 
              component={TournamentMatchesScreen} />
      </Tab.Navigator>
    </View>
   
  );
}


const MyTabBar=({ state, descriptors, navigation }:BottomTabBarProps)=> {
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,

            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[{...localStyles.buttonContainer}, 
                       
                       {backgroundColor: isFocused? globalStyles.colors.everglade1+toHex(255):globalStyles.colors.everglade1+toHex(220)}
                    ]}
            >
              <Icon name=
                    {label.toString()==='TournamentSelectedScreen'?"ribbon-outline" :"calendar-outline" }
                    size={height*0.04} 
                    color={globalStyles.colors.hampton5} />
              <CustomText style={localStyles.buttonText}>
                {label.toString()==='TournamentSelectedScreen'
                ?'Posiciones'
                :'Jornadas'}
              </CustomText>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  
  const localStyles = StyleSheet.create({
      buttonContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:Platform.OS === 'ios' ? height*0.02 : height*0.01,
        paddingTop:height*0.006
      },
      buttonText:{
        fontSize:globalStyles.textSizes.small,
        paddingLeft:width*0.015
      }
  });