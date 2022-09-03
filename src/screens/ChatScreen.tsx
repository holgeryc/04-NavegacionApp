import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { styles } from '../theme/appTheme'

export const ChatScreen = () => {
  return (
    <View style={styles.globalMargin }>
      <Text style={styles.title}> ChatScreen</Text>
    </View>
  )
}
