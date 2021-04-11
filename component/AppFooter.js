import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Menu from './Menu'
// import Logo from './Logo'
import { Header, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

class AppFooter extends Component {
  gotoSearch = () => {
    console.log('This is search page')
    this.props.navigation.navigate('Search')
  }
  render() {
    const rowData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 70,
      padding: 16,
      backgroundColor: 'white',
    }
    return (
      <View style={rowData}>
        <View>
          <Icon style={{ marginLeft: 8 }} name="home" size={22} />
          <Text style={{ color: 'gray' }}>Home</Text>
        </View>
        <View>
          <Icon
            style={{ marginLeft: 8 }}
            onPress={() => {
              this.gotoSearch()
            }}
            name="search"
            size={22}
            iconStyle={{ marginTop: 20 }}
          />
          <Text style={{ color: 'gray' }}>Search</Text>
        </View>

        <View>
          <Icon style={{ marginLeft: 22 }} name="tag" size={22} />
          <Text style={{ color: 'gray' }}>Add credits</Text>
        </View>
        <View>
          <Icon style={{ marginLeft: 20 }} name="calendar" size={22} />
          <Text style={{ color: 'gray' }}>Upcoming</Text>
        </View>
        <View>
          <Icon style={{ marginLeft: 20 }} name="user" size={22} />
          <Text style={{ color: 'gray' }}>Profile</Text>
        </View>
      </View>
    )
  }
}

export default AppFooter
