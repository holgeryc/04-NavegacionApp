import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps <any, any>{};

export const Pagina3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin }>
      <Text style={styles.title}> Pagina3Screen</Text>

      <Button title='regresar'
            onPress={()=> navigation.pop()}/>

      <Button title='Ir a pagina 1'
            onPress={()=> navigation.popToTop()}/>
       
    </View>
  )
}