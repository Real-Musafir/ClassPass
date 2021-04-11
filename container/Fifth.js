import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import AppFooter from '../component/AppFooter'
import { Typography, Colors } from '../styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CloseHeader from '../component/CloseHeader'

class Fifth extends Component {
  gotoHome = () => {
    this.props.navigation.navigate('Home')
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
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text=""
          />
        </View>
        <ScrollView style={scrlStyle}>
          <Text style={headTitle}>Which activities interest you?</Text>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>Yoga</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>Bootcamp / HIIT</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>Pilates</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>Cycling</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>Barre</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>Boxing</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>
              Work out with friends
            </Text>
          </View>
        </ScrollView>
        <View style={{ height: 8, width: 280, backgroundColor: 'blue' }}></View>
        <View style={{ padding: 15, backgroundColor: 'white' }}>
          <Button
            onPress={this.gotoHome}
            buttonStyle={{ backgroundColor: 'blue' }}
            title="Next"
            type="solid"
          />
        </View>
      </SafeAreaProvider>
    )
  }
}

export default Fifth
