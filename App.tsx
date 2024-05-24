import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { AuthProvider } from './src/context/AuthContext';

//This app will show the main components for React Native
 const App =()=> {
  return (
    <NavigationContainer>
      <AppState>
      <StackNavigator/>
      </AppState>
    </NavigationContainer>
  );
}

const AppState=({children}:any)=>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
export default App;
