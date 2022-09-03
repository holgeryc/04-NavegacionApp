import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
// import { Text, View } from 'react-native';
import { MenuLateral } from './src/navigator/MenuLateral';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        
      {/* <MenuLateralBasico/> */}
      <MenuLateral/>
      {/* <Tabs /> */}

      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children}: any ) =>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}


export default App;
