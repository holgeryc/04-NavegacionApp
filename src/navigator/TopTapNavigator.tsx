import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { colores } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {

  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary
        },
        style: {
          borderTopColor: colores.primary,
          // borderTopWidth: 0,
          shadowColor: 'transparent',
          elevation: 0
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon({ color, focused }) {

          let iconName: string = '';

          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubbles-outline'
              break
            case 'Contacts':
              iconName = 'people-outline'
              break
            case 'Albums':
              iconName = 'clipboard-outline'
              break;

            default:
              break;
          }
          return <Text style={{ color: color }}>
            <Icon name={iconName} size={20} color={colores.primary} />
          </Text>
        },
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
}