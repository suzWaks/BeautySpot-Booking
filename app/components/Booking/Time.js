import { Dimensions, StyleSheet, Text, TouchableOpacity, View, ScrollView, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import { FONTS,COLORS } from '../../utils/theme'

var {width,height}=Dimensions.get('window')
const Time = ({data}) => {

  const changeColor=()=>{
    backgroundColor:COLORS.PRIMARY
  }
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:10}}
    >
      {
        data.map((item,index)=>{
          return(
            <TimeCard
              key={index}
              time="11:30-12:30"
            />
          )
        })
      }

    </ScrollView>
  )
}

export default Time

const styles = StyleSheet.create({
  container:{
    height:height*0.06,
    width:width*0.4,
    backgroundColor:"#116CE2",
    justifyContent:'center',
    alignItems:'center',
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
    color:'white',
    alignItems:'center'
  }
})

const TimeCard=({time})=>{
  return(
    <TouchableOpacity style={styles.container}>
      <Text>{time}</Text>
    </TouchableOpacity>
  )
}