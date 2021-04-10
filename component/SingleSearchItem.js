import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
  ImageBackground,
} from 'react-native'
import { Button, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import AppFooter from '../component/AppFooter'
import { Typography, Colors } from '../styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CloseHeader from '../component/CloseHeader'
import SearchItem from '../component/SearchItem'

class SingleSearchItem extends Component {
  render() {
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 10,
    }
    const rowData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const rowData2 = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#F0FFFF',
      width: 300,
      marginTop: 20,
    }
    const rowData3 = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginBottom: 10,
    }
    const box = {
      width: 120,
      borderWidth: 2,
      padding: 10,
      borderRadius: 20,
      borderColor: Colors.lightGray,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const day = {
      padding: 10,
      fontSize: 18,
      color: 'gray',
    }
    const dayView = {
      borderBottomWidth: 2,
      borderBottomColor: Colors.lightGray,
    }
    const rowData4 = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopWidth: 2,
      borderColor: Colors.lightGray,
      marginTop: 10,
    }
    const rmbleTr = {
      fontSize: 20,
    }
    const subRmbleTr = {
      fontSize: 18,
      color: 'gray',
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
          <Image
            style={{ width: 390, height: 226 }}
            source={require('../assets/map.png')}
          />
          <View style={rowData}>
            <View style={rowData2}>
              <Icon
                name="search"
                size={22}
                style={{ marginTop: 10, marginLeft: 20 }}
              />
              <TextInput
                style={{ marginRight: 160, fontSize: 20 }}
                placeholder="Fitness"
              />
            </View>
            <View style={{ marginTop: 20, marginRight: 15 }}>
              <Text style={{ color: 'gray', marginLeft: 10 }}>9</Text>
              <Text style={{ color: 'gray' }}>credits</Text>
            </View>
          </View>
          <View style={rowData3}>
            <View style={box}>
              <Icon
                name="angle-down"
                size={20}
                // style={{ marginTop: 10, marginLeft: 20 }}
              />
              <Text>Filters</Text>
            </View>
            <View style={box}>
              <Text>View by time</Text>
            </View>
            <View style={box}>
              <Text>Time</Text>
              <Icon name="angle-down" size={20} />
            </View>
          </View>
          <View style={dayView}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Text style={day}>Today</Text>
              <Text style={day}>Sun11</Text>
              <Text style={day}>Mon12</Text>
              <Text style={day}>Tue13</Text>
              <Text style={day}>Wed14</Text>
              <Text style={day}>Thu</Text>
              <Text style={day}>Fri</Text>
            </ScrollView>
          </View>
          <View style={rowData4}>
            <View>
              <Text style={rmbleTr}>Rumble Training</Text>
              <Text style={subRmbleTr}>Upper East Side</Text>
              <Text style={subRmbleTr}>Strength Training, Running</Text>
              <Text style={{ fontSize: 18, marginTop: 5 }}>
                4.6{' '}
                <Icon
                  name="star"
                  size={15}
                  // style={{ marginTop: 10, marginLeft: 20 }}
                />{' '}
                (1000+) <Text style={{ color: '#0000FF' }}>Excellent</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default SingleSearchItem
