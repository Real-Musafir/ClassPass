import React, { Component } from 'react'
import { View, Text, ScrollView, Dimensions } from 'react-native'
import { Button, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import AppFooter from '../component/AppFooter'
import { Typography, Colors } from '../styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import CloseHeader from '../component/CloseHeader'

class Shedule extends Component {
  render() {
    const scrlStyle = {
      backgroundColor: '#fff',
    }
    const dayView = {
      borderBottomWidth: 2,
      borderBottomColor: Colors.lightGray,
      backgroundColor: 'white',
    }
    const day = {
      padding: 10,
      fontSize: 18,
      color: 'gray',
    }
    const mainView = {
      flexDirection: 'row',
      padding: 15,
      borderBottomWidth: 1,
      borderColor: Colors.lightGray,
    }
    const rawData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    const count = {
      width: 23,
      height: 23,
      borderWidth: 2,
      borderColor: Colors.lightGray,
      marginTop: 15,
      marginLeft: 140,
    }
    const dayChose = {
      backgroundColor: 'white',
      padding: 15,
      fontSize: 18,
      fontWeight: 'bold',
    }
    const windowWidth = Dimensions.get('window').width
    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text="Rumble Boxing-Flatiron/Ch...."
          />
        </View>
        <View style={dayView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={day}>Today</Text>
            <Text style={day}>Sun11</Text>
            <Text style={day}>Mon12</Text>
            <Text style={day}>Tue13</Text>
            <Text style={day}>Wed14</Text>
            <Text style={day}>Thu</Text>
            <Text style={day}>Fri</Text>
          </ScrollView>
        </View>
        <Text style={dayChose}>Today</Text>
        <ScrollView style={scrlStyle}>
          <View style={mainView}>
            <View>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>7:00 am</Text>
              <Text style={{ color: 'gray' }}>45 min</Text>
            </View>
            <View style={{ marginLeft: 40 }}>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                Rumble Boxing
              </Text>
              <Text style={{ color: 'gray' }}>Bobble</Text>
            </View>
          </View>
          <View style={mainView}>
            <View>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>8:15 am</Text>
              <Text style={{ color: 'gray' }}>45 min</Text>
            </View>
            <View style={{ marginLeft: 40 }}>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                Rumble Boxing
              </Text>
              <Text style={{ color: 'gray' }}>Frances</Text>
            </View>
          </View>
          <View style={mainView}>
            <View>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>9:30 am</Text>
              <Text style={{ color: 'gray' }}>45 min</Text>
            </View>
            <View style={{ marginLeft: 40 }}>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                Rumble Boxing
              </Text>
              <Text style={{ color: 'gray' }}>Frances</Text>
            </View>
            <View style={count}>
              <Text>12</Text>
            </View>
          </View>
          <View style={mainView}>
            <View>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                10:45 am
              </Text>
              <Text style={{ color: 'gray' }}>45 min</Text>
            </View>
            <View style={{ marginLeft: 40 }}>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                Rumble Boxing
              </Text>
              <Text style={{ color: 'gray' }}>Bobble</Text>
            </View>
          </View>
          <View style={mainView}>
            <View>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>3:45 pm</Text>
              <Text style={{ color: 'gray' }}>45 min</Text>
            </View>
            <View style={{ marginLeft: 40 }}>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                Rumble Boxing
              </Text>
              <Text style={{ color: 'gray' }}>Bobble</Text>
            </View>
            <View style={count}>
              <Text>11</Text>
            </View>
          </View>
          <View style={mainView}>
            <View>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>4:30 pm</Text>
              <Text style={{ color: 'gray' }}>45 min</Text>
            </View>
            <View style={{ marginLeft: 40 }}>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                Rumble Boxing
              </Text>
              <Text style={{ color: 'gray' }}>Noah</Text>
            </View>
          </View>
          <View style={mainView}>
            <View>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>5:45 pm</Text>
              <Text style={{ color: 'gray' }}>45 min</Text>
            </View>
            <View style={{ marginLeft: 40 }}>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                Rumble Boxing
              </Text>
              <Text style={{ color: 'gray' }}>Noah</Text>
            </View>
          </View>
          <View style={mainView}>
            <View>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>7:00 pm</Text>
              <Text style={{ color: 'gray' }}>45 min</Text>
            </View>
            <View style={{ marginLeft: 40 }}>
              <Text style={{ fontWeight: 'bold', color: 'gray' }}>
                Rumble Boxing
              </Text>
              <Text style={{ color: 'gray' }}>Noah</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default Shedule
