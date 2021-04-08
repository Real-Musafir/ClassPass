import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import AppFooter from '../component/AppFooter'
import { Typography, Colors } from '../styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CloseHeader from '../component/CloseHeader'
import Third from './Third'

class Search extends Component {
  render() {
    const windowWidth = Dimensions.get('window').width
    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text=""
          />
        </View>
        <ScrollView style={scrlStyle}>
          <Text>asdf</Text>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default Search
