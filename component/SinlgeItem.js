import React, { Component } from 'react'
import { View, Text, Dimensions, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import CloseHeader from './CloseHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Typography, Colors } from '../styles'
import { Avatar, Badge, withBadge } from 'react-native-elements'

class SingleItem extends Component {
  render() {
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 20,
    }
    const titleStyle = {
      ...Typography.title,
      marginBottom: 15,
    }
    const invFnd = {
      marginTop: 20,
      flexDirection: 'row',
      borderTopWidth: 2,
      borderBottomWidth: 2,
      borderColor: Colors.lightGray,
    }
    const invText = {
      marginTop: 15,
      marginLeft: 16,
      color: 'blue',
      marginBottom: 15,
    }
    const bdg = {
      backgroundColor: '#4169E1',
      width: 50,
      height: 30,
      borderRadius: 20,
    }
    const bdgTxt = {
      paddingTop: 5,
      marginLeft: 10,
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
    }
    const subTitle = {
      marginLeft: 10,
      marginBottom: 15,
      fontSize: 20,
      marginTop: 20,
    }
    const rdText = {
      color: 'blue',
      fontSize: 15,
      marginTop: 15,
    }
    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text=""
          />
        </View>
        <Image
          source={{
            uri: 'http://classpass.polbd.com/2.jpg',
            width: 412,
            height: 250,
          }}
        />
        <ScrollView style={scrlStyle}>
          <Text style={titleStyle}>Barry's</Text>
          <Text>At Home</Text>
          <View style={invFnd}>
            <Icon name="user-plus" size={18} style={{ marginTop: 15 }} />
            <Text style={invText}>Invite friends to join you</Text>
          </View>
          <View>
            <Text style={subTitle}>Reviews</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={bdg}>
                <Text style={bdgTxt}>4.7 *</Text>
              </View>
              <Text style={{ padding: 5 }}>Great(500+)</Text>
            </View>
            <Text style={rdText}>Read all reviews</Text>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default SingleItem
