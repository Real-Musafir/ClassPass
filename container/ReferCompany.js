import React, { Component } from 'react'
import { View, Text, Dimensions, Image, ScrollView, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CloseHeader from '../component/CloseHeader'
import { Typography, Colors } from '../styles'

class ReferCompany extends Component {
  render() {
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
      marginBottom: 5,
    }
    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text="Refer my company"
          />
          <ScrollView style={scrlStyle}>
            <Text>asfd</Text>
          </ScrollView>
        </View>
      </SafeAreaProvider>
    )
  }
}

export default ReferCompany
