import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentOptions, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Image, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';



const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 780 ? 'permanent' : 'front'}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {

  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://www.darylroththeatre.com/wp-content/uploads/2018/10/avatar-placeholder.png', }}
          style={styles.avatar} />

        <ScrollView>

          <TouchableOpacity
            style={{
              ...styles.menuBoton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('Tabs')}
          >
            <Icon name='compass-outline' size={25} color='black' />
            <Text style={styles.menuTexto}>Navegacion</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              ...styles.menuBoton,
              flexDirection: 'row'
            }}
            onPress={() => navigation.navigate('SettingsScreen')}
          >
            <Icon name='cog-outline' size={25} color='black' />
            <Text style={styles.menuTexto}>Ajustes</Text>
          </TouchableOpacity>

        </ScrollView>

        <View >
          <Text> © 2022 DevOrlando </Text>
        </View>

      </View>
    </DrawerContentScrollView>
  )
}

