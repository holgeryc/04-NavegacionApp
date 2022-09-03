import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { colores, styles } from '../theme/appTheme'

export const ContactsScreen = () => {


  const { signIn, logOut, authState } = useContext(AuthContext);
  console.log(signIn);

  return (
    authState.isLoggedIn == true ?
      <View style={styles.globalMargin}>
        <Text style={styles.title}> ContactsScreen</Text>
        <Button
          title='Logout'
          onPress={logOut}
          color={colores.primary}
        />
      </View> :
      <View style={styles.globalMargin}>
        <Text style={styles.title}> ContactsScreen</Text>
        <Button
          title='SingIn'
          onPress={signIn}
        />
      </View>
  )
}


