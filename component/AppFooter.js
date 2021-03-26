import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Menu from './Menu'
// import Logo from './Logo'
import { Header, SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

class AppFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
    }
  }
  cartPress = () => {
    console.log('cart presseddddddd')
  }
  updateSearch = (text) => {
    this.setState({
      searchText: text,
    })
  }
  render() {
    const rowData = {
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
    return (
      <View style={rowData}>
        <Header
          containerStyle={{
            backgroundColor: '#fff',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Icon name="home" size={22} iconStyle={{ marginTop: 20 }} />
          <Icon name="search" size={22} iconStyle={{ marginTop: 20 }} />
          <Icon name="tag" size={22} iconStyle={{ marginTop: 20 }} />
        </Header>
      </View>
    )
  }
}

export default AppFooter
