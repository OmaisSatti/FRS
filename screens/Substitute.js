import { StyleSheet, View } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
const Substitute = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader title={'Food Substitute'} iconLeft={require('../images/homeicon.png')} onPress={() => navigation.replace('Home')} />
    </View>
  )
}
export default Substitute
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
})