import React, { Component } from 'react'
import { View, ScrollView, Dimensions } from 'react-native'
import { Button, Image, Text } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import AppFooter from '../component/AppFooter'
import { Typography, Colors } from '../styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CloseHeader from '../component/CloseHeader'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showPast: true,
      showFavourite: false,
      showFriends: false,
    }
  }
  Showing = (rcv) => {
    if (rcv === 'past') {
      this.setState({
        showPast: true,
        showFavourite: false,
        showFriends: false,
      })
    }
    if (rcv === 'favourite') {
      this.setState({
        showPast: false,
        showFavourite: true,
        showFriends: false,
      })
    }
    if (rcv === 'friends') {
      this.setState({
        showPast: false,
        showFavourite: false,
        showFriends: true,
      })
    }
  }
  render() {
    const header = {
      padding: 15,
      marginTop: 20,
      paddingBottom: 0,
    }
    const title = {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#696969',
    }
    const rawData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 2,
      borderColor: Colors.lightGray,
      marginBottom: 15,
      paddingBottom: 20,
    }
    const cameraView = {
      width: 65,
      height: 65,
      backgroundColor: 'gray',
      borderRadius: 30,
    }
    const rawdata2 = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 15,
    }
    const bar = {
      width: 88,
      height: 5,
      backgroundColor: 'blue',
      marginTop: 10,
    }

    return (
      <SafeAreaProvider style={{ backgroundColor: 'white' }}>
        <View style={header}>
          <View style={rawData}>
            <View>
              <Text style={title}>Katie Cooke</Text>
              <Text>8 credits remaining</Text>
              <Text style={{ color: 'gray' }}>
                3 days left in current cycle
              </Text>
            </View>
            <View style={cameraView}>
              <Icon
                style={{ padding: 13, color: 'white' }}
                name="camera"
                size={35}
              />
            </View>
          </View>

          <View style={rawData}>
            <Text style={{ fontSize: 18 }}>Membership</Text>
            <Icon name="angle-right" size={20} />
          </View>
          <View style={rawData}>
            <Text style={{ fontSize: 18 }}>Settings</Text>
            <Icon name="angle-right" size={20} />
          </View>
          <View style={rawData}>
            <Text style={{ fontSize: 18 }}>Refer a friend</Text>
            <Icon name="angle-right" size={20} />
          </View>
          <View style={rawdata2}>
            <View style={{ width: 90 }}>
              <Text
                onPress={() => {
                  this.Showing('past')
                }}
                style={{ fontSize: 16, marginLeft: 10 }}
              >
                Past(0)
              </Text>
              {this.state.showPast && <View style={bar}></View>}
            </View>
            <View style={{ width: 90 }}>
              <Text
                onPress={() => {
                  this.Showing('favourite')
                }}
                style={{ fontSize: 16 }}
              >
                Favourite(1)
              </Text>
              {this.state.showFavourite && <View style={bar}></View>}
            </View>
            <View style={{ width: 90 }}>
              <Text
                onPress={() => {
                  this.Showing('friends')
                }}
                style={{ fontSize: 16 }}
              >
                Friends(0)
              </Text>
              {this.state.showFriends && <View style={bar}></View>}
            </View>
          </View>
        </View>
        <ScrollView style={scrlStyle}>
          {this.state.showPast && (
            <View>
              <Image
                style={{ width: 300, height: 200, marginLeft: 40, margin: 15 }}
                source={require('../assets/Past.png')}
              />
              <Text style={{ textAlign: 'center', color: 'gray' }}>
                You haven't taken any classes yet.
              </Text>
              <Text style={{ textAlign: 'center', color: 'gray' }}>
                {' '}
                Ready to sweat?
              </Text>
              <View style={{ marginBottom: 15 }}>
                <Button
                  buttonStyle={{
                    margin: 30,
                    titleColor: 'blue',
                    borderColor: 'blue',
                    borderWidth: 2,
                  }}
                  titleStyle={{ color: 'blue' }}
                  title="Book a class"
                  type="outline"
                />
              </View>
            </View>
          )}
          {this.state.showFavourite && (
            <View>
              <Button
                buttonStyle={{
                  backgroundColor: 'blue',
                  marginTop: 15,
                  height: 45,
                }}
                title="Book again"
                type="solid"
              />

              <Image
                style={{ height: 180, marginTop: 10 }}
                source={{ uri: 'http://classpass.polbd.com/2.jpg' }}
              />
            </View>
          )}
          {this.state.showFriends && (
            <View>
              <Button
                buttonStyle={{
                  backgroundColor: 'blue',
                  marginTop: 15,
                  height: 45,
                }}
                icon={
                  <Icon style={{ marginRight: 10 }} name="user" size={20} />
                }
                title="Add friends"
                type="solid"
              />
              <Icon
                style={{ padding: 20, textAlign: 'center', color: 'gray' }}
                name="long-arrow-up"
                size={30}
              />
              <Text
                style={{ textAlign: 'center', color: 'gray', fontSize: 20 }}
              >
                Connect with friends on ClassPass
              </Text>
              <Text
                style={{ textAlign: 'center', color: 'gray', marginTop: 10 }}
              >
                Manage the information you share with friends by adjusting your{' '}
                <Text style={{ color: 'blue' }}>privecy setting</Text>
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default Profile
