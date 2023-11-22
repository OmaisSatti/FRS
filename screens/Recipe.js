import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import CustomHeader from '../components/CustomHeader';
const Recipe = ({ navigation }) => {
  const [query, setQuery] = useState('');
  return (
    <View style={styles.container}>
      <CustomHeader title={'Food Recipe'} iconLeft={require('../images/homeicon.png')} onPress={() => navigation.replace('Home')} />
      <View style={styles.row}>
        <Searchbar placeholder="Search here..."
          placeholderTextColor={'#777777'}
          iconColor="#777777"
          inputStyle={styles.searchTxt}
          cursorColor={'#777777'}
          style={styles.search}
          onChangeText={setQuery}
          value={query}
        />
        <TouchableOpacity style={styles.filter}>
          <Image style={{ height: 22, width: 22, resizeMode: 'contain' }} source={require('../images/justify.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Recipe
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center'
  },
  filter: {
    borderRadius: 5,
    marginLeft: 10,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    height: 50,
    width: '15%',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    width: '90%',
    marginTop: 10
  },
  search: {
    width: '82%',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#FF6347',
    backgroundColor: '#FEEDEB30',
  },
  searchTxt: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#777777',
  },
})