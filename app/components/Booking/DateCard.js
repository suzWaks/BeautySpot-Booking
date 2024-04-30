import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DateCard = ({currentDay,date,week,backgroundColor,textColor}) => {
    return (
        <View style = {[styles.container,{backgroundColor:backgroundColor}]}>
            <Text style = {{fontSize:13,color:textColor}}>{currentDay}</Text>
            <Text style = {{fontSize:35,fontWeight:'bold',color:textColor}}>{date}</Text>
            <Text style = {{fontSize:13,color:textColor}}>{week}</Text>
        </View>
    )
}

export default DateCard

const styles = StyleSheet.create({
    container:{
        width:90,
        height:95,
        backgroundColor:"#116ce2",
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.8,
          elevation: 3,
      },
})