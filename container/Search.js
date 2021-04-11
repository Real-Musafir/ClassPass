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

class Search extends Component {
  gotoSingleItem = () => {
    this.props.navigation.navigate('SingleSearchItem')
  }
  render() {
    const items = [
      {
        title: 'Online',
        image: 'http://classpass.polbd.com/1.jpg',
        partners: '1234',
      },
      {
        title: 'Fitness',
        image: 'http://classpass.polbd.com/2.jpg',
        partners: '1234',
      },
      {
        title: 'Kerati',
        image: 'http://classpass.polbd.com/3.jpg',
        partners: '1234',
      },
      {
        title: 'At Your Best',
        image: 'http://classpass.polbd.com/4.jpg',
        partners: '1234',
      },
      {
        title: 'At Your Best',
        image: 'http://classpass.polbd.com/5.jpg',
        partners: '1234',
      },
    ]
    const scrlStyle = {
      backgroundColor: '#fff',
      padding: 15,
    }
    const headTitle = {
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 20,
    }
    const txtInp = {
      borderWidth: 2,
      padding: 10,
      borderColor: Colors.lightGray,
      borderRadius: 5,
      marginTop: 15,
      flexDirection: 'row',
      marginBottom: 10,
    }
    return (
      <SafeAreaProvider>
        <ScrollView style={scrlStyle}>
          <Text style={headTitle}>Search</Text>
          <Text style={{ color: 'gray' }}>United Kingdom</Text>
          <View style={txtInp}>
            <Icon
              onPress={() => {
                this.gotoSearch()
              }}
              name="search"
              size={22}
              iconStyle={{ marginTop: 20 }}
            />
            <TextInput
              style={{ marginLeft: 10, fontSize: 20 }}
              placeholder="Find a venue or activity"
            />
          </View>
          {items.map((item, index) => (
            <SearchItem
              key={index}
              title={item.title}
              image={item.image}
              partners={item.partners}
              gotoSingleItem={() => {
                this.gotoSingleItem()
              }}
            />
          ))}
        </ScrollView>
        <AppFooter navigation={this.props.navigation} />
      </SafeAreaProvider>
    )
  }
}

export default Search
