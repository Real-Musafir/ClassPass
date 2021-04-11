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
    const items = [
      {
        title: 'Rumble Training',
        image: 'http://classpass.polbd.com/1.jpg',
        status: 'Upper East Side',
        type: 'Strength Training, Running',
        rating: '1000+',
        safety: 'Safety guidelines',
        boocking: '25+ bookings this week',
        runtime: '50min',
        shedule: ['2:14 PM', '3:30 PM'],
      },
      {
        title: 'Mile High Run Club',
        image: 'http://classpass.polbd.com/3.jpg',
        status: 'live',
        type: 'Running Livestream strength',
        rating: '1000+',
        runtime: '50min',
        shedule: ['2:14 PM'],
      },
      {
        title: 'Rumble Training',
        image: 'http://classpass.polbd.com/2.jpg',
        status: 'Upper East Side',
        type: 'Strength Training, Running',
        rating: '1000+',
        safety: 'Safety guidelines',
        boocking: '25+ bookings this week',
        runtime: '50min',
        shedule: ['2:14 PM', '3:30 PM'],
      },
      {
        title: 'Rumble Boxing',
        image: 'http://classpass.polbd.com/4.jpg',
        status: 'Upper East Side',
        type: 'Strength Training, Running',
        rating: '500+',
        safety: 'Safety guidelines',
        boocking: '25+ bookings this week',
        runtime: '150min',
        shedule: ['2:14 PM', '3:30 PM'],
      },
    ]
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
      borderBottomWidth: 2,
    }
    const rmbleTr = {
      fontSize: 20,
    }
    const subRmbleTr = {
      fontSize: 18,
      color: 'gray',
    }
    const sftyView = {
      marginTop: 10,
      width: 25,
      height: 25,
      borderRadius: 13,
      backgroundColor: 'yellow',
    }
    const sftyText = {
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 'bold',
      color: 'white',
    }
    const rowData5 = {
      flexDirection: 'row',
      width: 210,
    }
    const booking = {
      marginTop: 10,
      width: 25,
      height: 25,
      borderRadius: 13,
      backgroundColor: 'red',
    }
    const sftTextt = {
      marginTop: 10,
      fontSize: 18,
      color: 'gray',
      marginLeft: 10,
      marginBottom: 5,
    }
    const lastPart = {
      borderBottomWidth: 2,
      borderColor: Colors.lightGray,
    }
    const rowData6 = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 200,
      marginTop: 10,
      marginBottom: 10,
    }
    const lastPartText = {
      fontSize: 17,
    }
    const sheduleView = {
      flexDirection: 'row',
    }
    const sheduleTime = {
      width: 80,
      padding: 5,
      marginLeft: 10,
      borderWidth: 2,
      borderRadius: 8,
      borderColor: Colors.lightGray,
      marginBottom: 10,
    }

    const windowWidth = Dimensions.get('window').width
    return (
      <SafeAreaProvider style={{ backgroundColor: 'white' }}>
        {/* <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            icon="angle-left"
            navigation={this.props.navigation}
            text=""
          />
        </View> */}
        <Image
          style={{ width: 410, height: 200 }}
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
            <Icon name="random" size={14} style={{ padding: 4 }} />
            <Text style={{ marginRight: 10 }}>Filters</Text>
          </View>
          <View style={box}>
            <Text style={{ marginLeft: 8 }}>View by time</Text>
          </View>
          <View style={box}>
            <Text style={{ marginLeft: 5 }}>Time</Text>
            <Icon name="angle-down" size={16} style={{ padding: 4 }} />
          </View>
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
        <ScrollView style={scrlStyle}>
          {items.map((item, index) => (
            <View>
              <View style={rowData4}>
                <View>
                  <Text style={rmbleTr}>{item.title}</Text>
                  <Text style={subRmbleTr}>{item.status}</Text>
                  <Text style={subRmbleTr}>{item.type}</Text>
                  <Text style={{ fontSize: 18, marginTop: 5 }}>
                    4.6{' '}
                    <Icon
                      name="star"
                      size={15}
                      // style={{ marginTop: 10, marginLeft: 20 }}
                    />{' '}
                    ({item.rating}){' '}
                    <Text style={{ color: '#0000FF' }}>Excellent</Text>
                  </Text>
                  {item.status !== 'live' && (
                    <View>
                      <View style={rowData5}>
                        <View style={sftyView}>
                          <Text style={sftyText}>+</Text>
                        </View>
                        <Text style={sftTextt}>Safty guidelines</Text>
                      </View>
                      <View style={rowData5}>
                        <View style={booking}>
                          {/* <Text style={sftyText}>+</Text> */}
                          <Icon
                            style={{ margin: 5, color: 'white' }}
                            name="compress"
                            size={15}
                          />
                        </View>
                        <Text style={sftTextt}>25+ bookings this week</Text>
                      </View>
                    </View>
                  )}
                </View>
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 140,
                    height: 100,
                    borderRadius: 5,
                    resizeMode: 'contain',
                    marginTop: 10,
                  }}
                ></Image>
              </View>
              <View style={lastPart}>
                <View style={rowData6}>
                  <Text style={lastPartText}>{item.title}</Text>
                  <Text style={{ color: 'gray', fontSize: 17 }}>(50min)</Text>
                </View>
                <View style={sheduleView}>
                  {item.shedule.map((shedule, index) => (
                    <View style={sheduleTime}>
                      <Text style={{ textAlign: 'center' }}>{shedule}</Text>
                    </View>
                  ))}
                  {/* <Text>{item.shedule.length}</Text> */}
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaProvider>
    )
  }
}

export default SingleSearchItem
