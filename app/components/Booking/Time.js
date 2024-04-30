import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Time = () => {
  return (
    <TouchableOpacity style={styles.container} onPress={() =>console.log(button_click)}>
      <Text style ={styles.time}>10:20am - 11:00am</Text>
    </TouchableOpacity>
  )
}

export default Time

const styles = StyleSheet.create({
  container:{
    width:125,
    height:40,
    backgroundColor:"#116CE2",
    justifyContent:'center',
    borderRadius:11,
    shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 3,
  },
  time:{
    fontSize:13,
    paddingHorizontal:3,
    color:'white'
  }
})