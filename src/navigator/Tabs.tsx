import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import { Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTapNavigator } from './TopTapNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}



const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: '#5856D6'
      }}
      screenOptions={({ route }) => ({
        tabBarIcon({ color, focused }) {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'enter'
              break
            case 'Tab2Screen':
              iconName = 'exit'
              break
            case 'StackNavigator':
              iconName = 'home'
              break;

            default:
              break;
          }
          return <Text style={{ color}}>
            <Icon name={iconName} size={25} color='white' />;
          </Text>
          // return <Text style = {{ color: color}}>{iconName}</Text>
        },
      })}
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'tab 1' }} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'tab 2' }} component={TopTapNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}

      tabBarOptions={{
        activeTintColor: colores.primary,
        style: {
          borderTopColor: colores.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15
        }
      }}

      screenOptions={({ route }) => ({
        tabBarIcon({ color, focused }) {

          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'apps'
              break
            case 'Tab2Screen':
              iconName = 'alarm'
              break
            case 'StackNavigator':
              iconName = 'film'
              break;

            default:
              break;
          }
          return <Text style={{ color }}>
            <Icon name={iconName} size={25} color={colores.primary} />;
          </Text>
          // return <Text style = {{ color: color}}>{iconName}</Text>
        },
      })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'tab 1' }} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{ title: 'tab 2' }} component={TopTapNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}