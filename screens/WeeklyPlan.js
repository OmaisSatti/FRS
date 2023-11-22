import { StyleSheet, View, StatusBar } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
const WeeklyPlan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <CustomHeader title={'Weekly Plan'} iconLeft={require('../images/homeicon.png')} onPress={() => navigation.replace('Home')} />
    </View>
  )
}
export default WeeklyPlan
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  }
})