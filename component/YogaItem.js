import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card } from 'react-native-elements'
import { Typography, Colors } from '../styles'

class YogaItem extends Component {
  render() {
    const { title, image, status, rating, total } = this.props
    const imageContainer = {
      marginRight: 10,
      borderWidth: 1,
      borderColor: Colors.lightGray,
    }
    const titleText = {
      fontSize: 18,
      marginTop: 20,
      marginLeft: 10,
    }
    const statusText = {
      color: 'grey',
      marginLeft: 10,
    }
    return (
      <View>
        <View style={imageContainer}>
          <Image
            source={{
              uri: image,
              width: 200,
              height: 150,
            }}
          />
          <Text style={titleText}>{title}</Text>
          <Text style={statusText}>{status}</Text>
          <Text style={statusText}>
            {rating} * ({total})
          </Text>
        </View>
      </View>
    )
  }
}

export default YogaItem
