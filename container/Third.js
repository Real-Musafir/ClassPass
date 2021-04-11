import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import AppFooter from '../component/AppFooter'
import { Typography, Colors } from '../styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CloseHeader from '../component/CloseHeader'

class Third extends Component {
  gotoFourth = () => {
    this.props.navigation.navigate('Fourth')
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
          <Text style={headTitle}>
            How familiar are you with studio fitness classes?
          </Text>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>
              Not familiar- I'm new to studio fitness
            </Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>
              Somewhat familiar - I'hve been a few times
            </Text>
          </View>
          <View style={weekBody}>
            <Text style={{ padding: 20, fontSize: 15 }}>
              Very familiar - I know which studios and activiies I want to book
            </Text>
          </View>
        </ScrollView>
        <View style={{ height: 8, width: 180, backgroundColor: 'blue' }}></View>
        <View style={{ padding: 15, backgroundColor: 'white' }}>
          <Button
            onPress={this.gotoFourth}
            buttonStyle={{ backgroundColor: 'blue' }}
            title="Next"
            type="solid"
          />
        </View>
      </SafeAreaProvider>
    )
  }
}

export default Third
