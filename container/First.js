import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import AppFooter from '../component/AppFooter'
import { Typography, Colors } from '../styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import { SafeAreaProvider } from 'react-native-safe-area-context'

class First extends Component {
  gotoSecond = () => {
    this.props.navigation.navigate('Second')
  }
  render() {
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 10,
    }
    const headTitle = {
      marginTop: 30,
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    }
    const subtitle = {
      fontSize: 20,
      color: 'gray',
      textAlign: 'center',
      marginBottom: 10,
    }
    const Img = {
      width: 400,
      height: 320,
      // marginLeft: 10,
    }
    const ImgView = {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    }
    return (
      <SafeAreaProvider>
        <ScrollView style={scrlStyle}>
          <Text style={headTitle}>Hi, Katie</Text>
          <Text style={subtitle}>Ready to hit the ground running?</Text>
          <Text style={subtitle}>We'll help you get started</Text>
          <View style={ImgView}>
            <Image
              style={Img}
              source={require('../assets/first_page_pic.png')}
            />
          </View>
          <Text style={subtitle}>A few quick questions is all it takes</Text>
        </ScrollView>
        <View style={{ height: 8, width: 60, backgroundColor: 'blue' }}></View>
        <View style={{ padding: 10, backgroundColor: 'white' }}>
          <Button
            onPress={this.gotoSecond}
            buttonStyle={{ backgroundColor: 'blue' }}
            title="Let's go"
            type="solid"
          />
        </View>
      </SafeAreaProvider>
    )
  }
}

export default First
