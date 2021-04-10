import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Third from '../container/Third'
import { Image } from 'react-native-elements'

class SearchItem extends Component {
  gotoSingleItem = () => {
    console.log('goto single item')
    this.props.gotoSingleItem?.()
  }
  render() {
    const { title, image, partners } = this.props
    return (
      <View style={{ padding: 5 }}>
        <Image
          onPress={() => {
            this.gotoSingleItem()
          }}
          source={{ uri: image }}
          style={{ width: 370, height: 230, borderRadius: 5 }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              //   alignItems: 'center',
              marginTop: 155,
              marginLeft: 20,
              //   marginRight: 170,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 27, fontWeight: 'bold', color: 'white' }}
              >
                {title}
              </Text>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
              >
                {partners} Partners
              </Text>
            </View>
          </View>
        </Image>
      </View>
    )
  }
}

export default SearchItem
