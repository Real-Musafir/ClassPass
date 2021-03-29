import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import AppFooter from '../component/AppFooter'
import { Typography, Colors } from '../styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import YogaItem from '../component/YogaItem'
import { SafeAreaProvider } from 'react-native-safe-area-context'

class Home extends Component {
  gotoSingleItem = () => {
    this.props.navigation.navigate('SingleItem')
  }
  gotoReferCompany = () => {
    this.props.navigation.navigate('ReferCompany')
    // console.log('Go to refer company')
  }
  render() {
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 20,
      marginTop: 15,
    }
    const titleStyle = {
      ...Typography.title,
      marginBottom: 20,
    }
    const subTitleStyle = {
      ...Typography.subTitle,
      marginBottom: 15,
    }
    const imageContainer = {
      marginRight: 10,
      borderWidth: 1,
      borderColor: Colors.lightGray,
    }
    const titleText = {
      fontSize: 18,
      marginTop: 20,
      marginLeft: 10,
      marginBottom: 15,
    }
    const subTitle = {
      marginLeft: 10,
      marginBottom: 15,
      color: 'gray',
    }
    const corporateWallness = {
      borderWidth: 1,
      borderColor: Colors.lightGray,
    }
    const Img = {
      width: 400,
      height: 160,
    }

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

    return (
      <SafeAreaProvider>
        <ScrollView style={scrlStyle}>
          <Text style={titleStyle}>For You</Text>
          <View style={{ marginTop: 5 }}>
            <Text style={subTitleStyle}>
              Top livestream classes in your region
            </Text>
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
          <View style={{ marginTop: 25 }}>
            <Text style={subTitleStyle}>Best of Yoga - Livestream</Text>
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
          <View style={{ marginTop: 25 }}>
            <Text style={subTitleStyle}>Best of HIIT - Livestream</Text>
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
          <View style={{ marginTop: 25 }}>
            <Text style={subTitleStyle}>Support Women-Owned Businesses</Text>
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
          <View style={{ marginTop: 25 }}>
            <Text style={subTitleStyle}>New venues near you</Text>
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
          <View style={{ marginTop: 25 }}>
            <Text style={subTitleStyle}>Corporate Wallness</Text>
            <View style={corporateWallness}>
              {/* <Image
                style={{
                  width: 400,
                }}
                onPress={this.gotoReferCompany}
                // style={{ width: 400 }}
                source={require('../assets/CorporateWellness.png')}
              /> */}
              <Image
                onPress={this.gotoReferCompany}
                style={Img}
                source={require('../assets/CorporateWellness.png')}
              />
              <Text style={{ padding: 10, fontSize: 18 }}>
                100 credits could be yours
              </Text>
              <Text style={{ padding: 10, color: 'gray' }}>
                what if work could help you work out for less? Refer your
                company to join out corporate program and get 10 crdits for your
                referal plus 100 it they sign up.
              </Text>
              <Text style={{ padding: 10, color: '#00BFFF' }}>
                Refer my company
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 25 }}>
            <Text style={subTitleStyle}>Free on-demand workouts</Text>
            <View>
              <Image
                style={Img}
                source={require('../assets/FreeOnDemand.png')}
              />
            </View>
          </View>
          <View style={{ marginTop: 25 }}>
            <Text style={subTitleStyle}>New</Text>
            <View style={corporateWallness}>
              <Image style={Img} source={require('../assets/New.png')} />

              <Text style={{ padding: 10, fontSize: 18 }}>
                UK Lockdown Update
              </Text>
              <Text style={{ padding: 10, color: 'gray' }}>
                The end is in sight Followoing recent announcement acress the
                UK, we are likely to see the reurn of wellness and gyps on 12th
                April, and indoor froup classes on 17th May
              </Text>
              <Text style={{ padding: 10, color: '#00BFFF' }}>
                Manage my plan
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 25 }}>
            <View style={corporateWallness}>
              <Image style={Img} source={require('../assets/YouSked.png')} />
              <Text style={{ padding: 10, fontSize: 18 }}>
                You asked we listened intrducing full credit rollover
              </Text>
              <Text style={{ padding: 10, color: 'gray' }}>
                To give you even more flexibility as you get back to class, you
                can now roll over up to the number of credits in your upcoming
                plan
              </Text>
              <Text style={{ padding: 10, color: '#00BFFF' }}>Learn more</Text>
            </View>
          </View>
          <View style={{ marginTop: 25, marginBottom: 20 }}>
            <Text style={subTitleStyle}>Welcome to ClassPass</Text>
            <View style={imageContainer}>
              <Image
                style={Img}
                source={{ uri: 'http://classpass.polbd.com/3.jpg' }}
              />

              <Text style={titleText}>Where to begin?</Text>
              <Text style={subTitle}>Not sure what Class pass is </Text>
            </View>
          </View>
        </ScrollView>
        <AppFooter />
      </SafeAreaProvider>
    )
  }
}

export default Home
