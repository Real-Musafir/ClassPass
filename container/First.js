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
      marginTop: 15,
    }
    const headTitle = {
      paddingTop: 10,
      fontSize: 40,
      fontWeight: 'bold',
      marginLeft: 125,
    }
    const subtitle = {
      fontSize: 20,
      color: 'gray',
      marginTop: 20,
      marginLeft: 50,
      width: 320,
      marginBottom: 10,
    }
    const Img = {
      width: 350,
      height: 320,
      marginLeft: 20,
    }
    return (
      <SafeAreaProvider>
        <ScrollView style={scrlStyle}>
          <Text style={headTitle}>Hi, Katie</Text>
          <Text style={subtitle}>
            Ready to hit the ground running? &ensp; We'll help you get started
          </Text>
          <Image
            onPress={this.gotoReferCompany}
            style={Img}
            source={require('../assets/first_page_pic.png')}
          />
          <Text style={subtitle}>A few quick questions is all it takes</Text>
        </ScrollView>
        <View style={{ height: 8, width: 60, backgroundColor: 'blue' }}></View>
        <View style={{ padding: 15 }}>
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
