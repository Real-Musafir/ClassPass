import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import AppFooter from '../component/AppFooter'
import { Typography, Colors } from '../styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CloseHeader from '../component/CloseHeader'

class Fourth extends Component {
  gotoFifth = () => {
    this.props.navigation.navigate('Fifth')
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
      marginLeft: 50,
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
          <Text style={headTitle}>What is your primary goal</Text>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>
              Gain muscle / tone
            </Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>Lose weight</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>Improve cardio</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>Be more active</Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>
              Work out with friends
            </Text>
          </View>
        </ScrollView>
        <View style={{ height: 8, width: 220, backgroundColor: 'blue' }}></View>
        <View style={{ padding: 15 }}>
          <Button
            onPress={this.gotoFifth}
            buttonStyle={{ backgroundColor: 'blue' }}
            title="Next"
            type="solid"
          />
        </View>
      </SafeAreaProvider>
    )
  }
}

export default Fourth
