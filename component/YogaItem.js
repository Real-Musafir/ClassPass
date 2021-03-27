import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card } from 'react-native-elements'
import { Typography, Colors } from '../styles'

class YogaItem extends Component {
  gotoSingleItem = () => {
    console.log('goto single item')
    this.props.gotoSingleItem?.()
  }
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
    const Img = {
      width: 200,
      height: 150,
    }
    return (
      <View>
        <View style={imageContainer}>
          <Image
            onPress={() => {
              this.gotoSingleItem()
            }}
            style={Img}
            source={{ uri: image }}
          />
          <Text style={titleText}>{title}</Text>
          <Text style={statusText}>{status}</Text>
          <View style={{ marginBottom: 10 }}>
            <Text style={statusText}>
              {rating} * ({total})
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

export default YogaItem
