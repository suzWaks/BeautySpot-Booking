import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Testimonials from '../components/Testimonials'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, FONTS, SIZES } from '../utils/theme';
import Btns from '../components/button';

var {width,height}=Dimensions.get('window');
const Review = () => {
  return (
    <View style={{ height: height, width: width}}>
      <View style={{alignItems: 'center', justifyContent: 'space-around',marginTop:height*0.02}}>
        <View style={styles.textArea}>
          <View style={{ marginTop: height*0.025 }}>
            <Icon name='message-outline' size={23} color='#1877F2' style={{ position: 'absolute' }} />
            <Icon name="star" size={18} color="#1877F2" style={{ position: 'absolute', left: 2 }} />
          </View>
          <TextInput
            placeholder='Write the review'
            placeholderTextColor='#999'
            textAlignVertical='top'
            editable
            multiline
            numberOfLines={8}
            style={{ padding: 10, height: height*0.18, width: width*0.75, alignSelf: 'center',fontFamily:FONTS.regular,fontSize:SIZES.medium}} />
        </View>
        <View style={styles.rating}>
          <Text style={{fontFamily:FONTS.regular,fontSize:SIZES.medium,color:COLORS.PRIMARY}}>Rate Us</Text>
          <View style={{ flexDirection: 'row' }}>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: hp(2), color: 'white', textAlign: 'center' }}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop:height*0.1}}>
        <Text style={{fontFamily:FONTS.bold,fontSize:SIZES.medium,textAlign:'center'}}>See what people has to say about us</Text>
        <Testimonials style={{marginTop:height}} />
      </View>
    </View>
  )
}

export default Review
const Star=()=>{
  const [isSelect,setIsSelect]=useState(false)
  const colorChange=()=>{
    setIsSelect(!isSelect)
  }
  
  return(
    <TouchableOpacity onPress={()=>colorChange()}>
      <Icon name="star" size={25} color={isSelect?COLORS.PRIMARY:COLORS.WHITE} />
    </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#116ce2"
  },
  title: {
    fontSize: hp(3),
    color: 'white',
    fontWeight: 'bold',
  },
  textArea: {
    height: height*0.2,
    width: width*0.9,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#d3d3d3',
    paddingHorizontal: '3%',
    justifyContent: 'space-between',
  },
  rating: {
    height:height*0.08,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10%'

  },
  button: {
    width: '40%',
    height: height*0.065,
    backgroundColor: "#116ce2",
    justifyContent: 'center',
    borderRadius: 30,

  }

})