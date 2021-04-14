import React, { Component } from 'react'
import { View, Text, Dimensions, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import CloseHeader from './CloseHeader'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Typography, Colors } from '../styles'
import { Avatar, Badge, withBadge, Button } from 'react-native-elements'
import YogaItem from './YogaItem'

class SingleItem extends Component {
  gotoSingleItem = () => {
    this.props.navigation.navigate('SingleItem')
    console.log('This is single item')
  }
  gotoShedule = () => {
    this.props.navigation.navigate('Shedule')
  }
  render() {
    const items = [
      {
        title: 'Barry',
        image: 'http://classpass.polbd.com/1.jpg',
        status: 'At Home',
        rating: '4.8',
        total: '500+',
      },
      {
        title: 'Block',
        image: 'http://classpass.polbd.com/2.jpg',
        status: 'At Home',
        rating: '4.7',
        total: '500+',
      },
      {
        title: 'Core Colllective',
        image: 'http://classpass.polbd.com/3.jpg',
        status: 'At Home',
        rating: '4.6',
        total: '500+',
      },
      {
        title: 'At Your Best',
        image: 'http://classpass.polbd.com/4.jpg',
        status: 'On Demand',
        rating: '4.8',
        total: '500+',
      },
      {
        title: 'At Your Best',
        image: 'http://classpass.polbd.com/5.jpg',
        status: 'On Demand',
        rating: '4.8',
        total: '500+',
      },
    ]
    const windowWidth = Dimensions.get('window').width
    const scrlStyle = {
      backgroundColor: '#fff',
      marginBottom: 5,
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
      backgroundColor: '#663399',
      width: 60,
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
      marginBottom: 15,
      fontSize: 20,
      marginTop: 20,
    }
    const rdText = {
      color: 'blue',
      fontSize: 15,
      marginTop: 15,
      marginBottom: 20,
    }
    const rvw = {
      borderBottomWidth: 2,
      borderColor: Colors.lightGray,
      marginBottom: 20,
    }
    const rawData = {
      flexDirection: 'row',
      marginBottom: 15,
    }
    const iconSide = {
      paddingTop: 13,
      marginLeft: 20,
    }
    const iconSideTitle = {
      fontSize: 16,
      marginBottom: 5,
    }
    const iconSideText = {
      fontSize: 14,
      color: 'gray',
    }
    const rawData2 = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 30,
      marginTop: 10,
    }
    const mapStyle = {
      borderWidth: 2,
      borderColor: Colors.lightGray,
      marginTop: 20,
      marginBottom: 25,
    }
    const inviteIcon = {
      width: 30,
      height: 30,
      backgroundColor: 'blue',
      marginTop: 13,
      borderRadius: 15,
    }
    const classPassMember = {
      height: 50,
      backgroundColor: '#87CEEB',
      borderRadius: 6,
      marginBottom: 20,
    }
    const classPassMemberText = {
      textAlign: 'center',
      padding: 14,
      fontSize: 15,
    }
    const bookingIcon = {
      width: 30,
      height: 30,
      backgroundColor: '#FF0000',
      borderRadius: 18,
    }
    const amenitiesView = {
      marginTop: 15,
      padding: 10,
      borderWidth: 2,
      borderColor: Colors.lightGray,
      marginBottom: 10,
    }
    const amenities = ['Showers', 'Locker', 'Towels']

    return (
      <SafeAreaProvider>
        <View style={{ flex: 0, width: windowWidth }}>
          <CloseHeader
            //  icon="angle-left"
            navigation={this.props.navigation}
            text=""
            right="heart"
          />
        </View>
        <ScrollView style={scrlStyle}>
          <Image
            source={{
              uri: 'http://classpass.polbd.com/2.jpg',
              width: 412,
              height: 250,
            }}
          />

          <View style={{ padding: 20 }}>
            <Text style={titleStyle}>Barry's</Text>
            <Text>At Home</Text>
            <View style={invFnd}>
              <View style={inviteIcon}>
                <Icon
                  name="user-plus"
                  size={18}
                  style={{ padding: 6, color: 'white' }}
                />
              </View>
              <Text style={invText}>Invite friends to join you</Text>
            </View>
            <View style={rvw}>
              <Text style={subTitle}>Reviews</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={bdg}>
                  <Text style={bdgTxt}>
                    4.7{' '}
                    <Icon
                      name="star"
                      // size={18}
                      style={{ color: 'white' }}
                    />{' '}
                  </Text>
                </View>
                <Text style={{ padding: 5 }}>Great(500+)</Text>
              </View>
              <Text style={rdText}>Read all reviews</Text>
              <View style={classPassMember}>
                <Text style={classPassMemberText}>
                  ClassPass member usually save 24% here
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <View style={bookingIcon}>
                  <Icon
                    name="line-chart"
                    size={18}
                    style={{ padding: 5, color: 'white' }}
                  />
                </View>
                <Text style={{ padding: 2, fontSize: 18 }}>
                  {' '}
                  50+ booking this week
                </Text>
              </View>
            </View>
            <Text style={subTitle}>Safety & Cleanliness</Text>
            <Text style={{ fontSize: 15 }}>
              Safety guidelines are provided by 1 Rebel and last updated on
              3/25/2021
            </Text>
            <View style={rawData}>
              <Icon name="share" size={18} style={{ marginTop: 15 }} />
              <View style={iconSide}>
                <Text style={iconSideTitle}>Temperatue checks</Text>
                <Text style={iconSideText}>
                  All attendees and staff will be Temperatue checked on arrival
                  at the reception desk
                </Text>
              </View>
            </View>
            <View style={rawData}>
              <Icon name="share" size={18} style={{ marginTop: 15 }} />
              <View style={iconSide}>
                <Text style={iconSideTitle}>Social destance measure</Text>
                <Text style={iconSideText}>
                  Wc are operating at reduced capacity to ensure a safe
                  environment. Floor markers are in place for social destancing
                  measres. Floor markeser are i place for social distance
                  measures . Floor bench spots are adequately space apart and
                  there are piexiglass dividers between treadmaill
                </Text>
              </View>
            </View>
            <View style={rawData}>
              <Icon name="share" size={18} style={{ marginTop: 15 }} />
              <View style={iconSide}>
                <Text style={iconSideTitle}>Extra sanitation</Text>
                <Text style={iconSideText}>
                  Wc are operating at reduced capacity to ensure a safe
                  environment. Floor markers are in place for social destancing
                  measres. Floor markeser are i place for social distance
                  measures . Floor bench spots are adequately space apart and
                  there are piexiglass dividers between treadmaill
                </Text>
              </View>
            </View>
            <View style={rawData}>
              <Icon name="share" size={18} style={{ marginTop: 15 }} />
              <View style={iconSide}>
                <Text style={iconSideTitle}>Mask-wearing policies</Text>
                <Text style={iconSideText}>
                  Wc are operating at reduced capacity to ensure a safe
                  environment. Floor markers are in place for social destancing
                  measres. Floor markeser are i place for social distance
                  measures . Floor bench spots are adequately space apart and
                  there are piexiglass dividers between treadmaill
                </Text>
              </View>
            </View>
            <View style={rawData}>
              <Icon name="share" size={18} style={{ marginTop: 15 }} />
              <View style={iconSide}>
                <Text style={iconSideTitle}>Limited capacity</Text>
                <Text style={iconSideText}>
                  Wc are operating at reduced capacity to ensure a safe
                  environment. Floor markers are in place for social destancing
                  measres. Floor markeser are i place for social distance
                  measures . Floor bench spots are adequately space apart and
                  there are piexiglass dividers between treadmaill
                </Text>
              </View>
            </View>
            <View style={rawData}>
              <Icon name="share" size={18} style={{ marginTop: 15 }} />
              <View style={iconSide}>
                <Text style={iconSideTitle}>Limited amenity access</Text>
                <Text style={iconSideText}>
                  Wc are operating at reduced capacity to ensure a safe
                  environment. Floor markers are in place for social destancing
                  measres. Floor markeser are i place for social distance
                  measures . Floor bench spots are adequately space apart and
                  there are piexiglass dividers between treadmaill
                </Text>
              </View>
            </View>
            <View style={rawData}>
              <Icon name="share" size={18} style={{ marginTop: 15 }} />
              <View style={iconSide}>
                <Text style={iconSideTitle}>Ventilation system</Text>
                <Text style={iconSideText}>
                  Wc are operating at reduced capacity to ensure a safe
                  environment. Floor markers are in place for social destancing
                  measres. Floor markeser are i place for social distance
                  measures . Floor bench spots are adequately space apart and
                  there are piexiglass dividers between treadmaill
                </Text>
              </View>
            </View>
            <View style={{ marginTop: 25 }}>
              <Text style={subTitle}>About</Text>
              <Text>
                Barr's is a 50 minute cardio and strength-building workout
                designed to help your body burn
              </Text>
            </View>
            <View style={amenitiesView}>
              <Text
                style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 15 }}
              >
                Amenities
              </Text>
              {amenities.map((item, index) => (
                <View style={{ flexDirection: 'row' }}>
                  <Icon
                    style={{ color: 'gray', marginTop: 3, marginBottom: 5 }}
                    name="check"
                    size={16}
                  />
                  <Text
                    style={{ marginLeft: 5, fontSize: 15, marginBottom: 5 }}
                    key={index}
                  >
                    {item}
                  </Text>
                </View>
              ))}
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderTopWidth: 2,
                borderColor: Colors.lightGray,
                marginTop: 10,
              }}
            >
              <View style={rawData}>
                <Icon name="share" size={18} style={{ marginTop: 15 }} />
                <View style={rawData2}>
                  <Text style={{ marginTop: 5 }}>@Irebeluk</Text>
                  <Icon
                    name="angle-right"
                    size={18}
                    style={{ marginLeft: 250, marginTop: 5 }}
                  />
                </View>
              </View>
            </View>
            <View style={mapStyle}>
              <Image
                style={{ width: 370, height: 226 }}
                source={require('../assets/map.png')}
              />
              <Text style={{ padding: 15 }}>
                Cardinal Place Victoria Street, Longon, SW1E
              </Text>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: Colors.lightGray,
              }}
            >
              <Text style={subTitle}> How to get there</Text>
              <Text style={{ color: 'gray', marginBottom: 20 }}>
                Your session will take place on the rooftop of CARDINAL PLACE
                VICTORIA. The full address is Cardinal Place Victory Street,
                Loondon, SW1EFJD.{' '}
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <Text style={subTitle}>Similar Businesses</Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {items.map((item, index) => (
                  <YogaItem
                    key={index}
                    title={item.title}
                    image={item.image}
                    status={item.status}
                    rating={item.rating}
                    total={item.total}
                    gotoSingleItem={() => {
                      this.gotoSingleItem()
                    }}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
        <View style={{ padding: 15, backgroundColor: 'white' }}>
          <Button
            onPress={this.gotoShedule}
            buttonStyle={{ backgroundColor: 'blue' }}
            title="View schedule"
          />
        </View>
      </SafeAreaProvider>
    )
  }
}

export default SingleItem
