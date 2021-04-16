import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import AppFooter from '../component/AppFooter'
import { Typography, Colors } from '../styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CloseHeader from '../component/CloseHeader'

class Second extends Component {
  gotoThird = () => {
    this.props.navigation.navigate('Third')
  }
  render() {
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 15,
    }
    const headTitle = {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
    }
    const weekBody = {
      borderWidth: 1,
      height: 70,
      borderColor: Colors.lightGray,
      marginTop: 8,
    }

    const windowWidth = Dimensions.get('window').width
    return (
      <SafeAreaProvider style={{ backgroundColor: 'white' }}>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text=""
          />
        </View>
        <ScrollView style={scrlStyle}>
          <Text style={headTitle}>
            How often would you like to work out throug ClassPass
          </Text>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>1 x per week</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>2 x per week</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>3 x per week</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>4+ x per week</Text>
          </View>
        </ScrollView>
        <View style={{ height: 8, width: 120, backgroundColor: 'blue' }}></View>
        <View style={{ padding: 15, backgroundColor: 'white' }}>
          <Button
            onPress={this.gotoThird}
            buttonStyle={{ backgroundColor: 'blue' }}
            title="Next"
            type="solid"
          />
        </View>
      </SafeAreaProvider>
    )
  }
}

export default Second
