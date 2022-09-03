import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';
import { colores, styles } from '../theme/appTheme';


export const Tab1Screen = () => {

  useEffect(() => {
    console.log('Tab1Screen effect');

  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Iconos </Text>
      <Text>
        <TouchableIcon iconName='rocket' />
        <TouchableIcon iconName='bag-remove-outline' />
        <TouchableIcon iconName='body-outline' />
        <TouchableIcon iconName='cart-outline' />
      </Text>
      <Text>
        <TouchableIcon iconName='arrow-down-circle-outline' />
        <TouchableIcon iconName='at-outline' />
        <TouchableIcon iconName='cloud-done-outline' />
        <TouchableIcon iconName='arrow-redo-outline' />
      </Text>
      <Text>
        <TouchableIcon iconName='easel-outline' />
        <TouchableIcon iconName='eye-outline' />
        <TouchableIcon iconName='home-outline' />
      </Text>
      <Text>
        <TouchableIcon iconName='happy-outline' />
        <TouchableIcon iconName='globe-outline' />
        <TouchableIcon iconName='play-outline' />
      </Text>
    </View>
  )
}
