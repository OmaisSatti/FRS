import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace('Home')
  }, 2000);
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <Animatable.View animation={'zoomIn'}>
        <Image style={styles.img} source={require('../images/3.jpg')} />
      </Animatable.View>
      <Animatable.Text style={styles.title} animation={'fadeInLeft'}>Food Recommendation System</Animatable.Text>
      <Animatable.Text style={[styles.txt, { position: 'absolute', bottom: 10 }]} animation="pulse" easing="ease-out" iterationCount="infinite">V1.0.0</Animatable.Text>
    </View>
  )
}
export default Splash
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FF6347',
    fontFamily: 'SF-Pro-Rounded-Semibold'
  },
  txt: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FF6347',
    fontFamily: 'Poppins-Medium'
  },
  img: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
  },
})







