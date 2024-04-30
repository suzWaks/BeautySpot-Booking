import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Testimonials from '../components/Testimonials'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const Review = () => {
  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'space-around' }}>
        <View style={styles.textArea}>
          <View style={{ marginTop: '4%' }}>
            <Icon name='message-outline' size={20} color='#1877F2' style={{ position: 'absolute' }} />
            <Icon name="star" size={16} color="#1877F2" style={{ position: 'absolute', left: 2 }} />
          </View>
          <TextInput
            placeholder='Write the review'
            placeholderTextColor='#999'
            textAlignVertical='top'
            editable
            multiline
            numberOfLines={8}
            style={{ padding: 10, height: '90%', width: '90%', alignSelf: 'center' }} />
        </View>
        <View style={styles.rating}>
          <Text>Rate Us</Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="star" size={25} color="#1877F2" />
            <Icon name="star" size={25} color="#1877F2" />
            <Icon name="star" size={25} color="#1877F2" />
            <Icon name="star-outline" size={25} color="#1877F2" />
            <Icon name="star-outline" size={25} color="#1877F2" />
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: hp(2), color: 'white', textAlign: 'center' }}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 6 }}>
        <Testimonials />
      </View>
    </View>
  )
}

export default Review

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
    height: '40%',
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#d3d3d3',
    paddingHorizontal: '3%',
    justifyContent: 'space-between',
  },
  rating: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10%'

  },
  button: {
    width: '40%',
    height: '15%',
    backgroundColor: "#116ce2",
    justifyContent: 'center',
    borderRadius: 30,

  }

})