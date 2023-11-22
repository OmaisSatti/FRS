import { StyleSheet, View, Image, TouchableOpacity, Text, StatusBar } from 'react-native'
import React from 'react'
import CustomHeader from '../components/CustomHeader'
const Ingredients = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'} barStyle={'dark-content'} />
      <CustomHeader title={'Food Ingredients'} iconLeft={require('../images/3.jpg')} />
      <Image style={styles.img} source={require('../images/6.jpg')} />
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Choose Image</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Ingredients
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  img: {
    width: 250,
    height: 250,
    resizeMode: 'contain'
  },
  btn: {
    width: '80%',
    padding: 14,
    justifyContent: 'center',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#FF6347'
  },
  btnText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontFamily: 'Poppins-Medium'
  }
})