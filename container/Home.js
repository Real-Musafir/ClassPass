import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AppFooter from '../component/AppFooter'
import { Typography, Colors } from '../styles'
import YoutubePlayer from 'react-native-youtube-iframe'
import YogaItem from '../component/YogaItem'
import { SafeAreaProvider } from 'react-native-safe-area-context'

class Home extends Component {
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
                />
              ))}
            </ScrollView>
          </View>
          <View style={{ marginTop: 20 }}>
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
                />
              ))}
            </ScrollView>
          </View>
          <View style={{ marginTop: 20 }}>
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
                />
              ))}
            </ScrollView>
          </View>
          <View style={{ marginTop: 20 }}>
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
                />
              ))}
            </ScrollView>
          </View>
          <View style={{ marginTop: 20 }}>
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
                />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
        <AppFooter />
      </SafeAreaProvider>
    )
  }
}

export default Home
