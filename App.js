import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Home from './container/Home'
import SingleItem from './component/SinlgeItem'
import ReferCompany from './container/ReferCompany'
import First from './container/First'
import Second from './container/Second'
import Third from './container/Third'
import Fourth from './container/Fourth'
import Fifth from './container/Fifth'
import Search from './container/Search'

const Stack = createStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="First"
            component={First}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />

          <Stack.Screen
            name="Second"
            component={Second}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="Third"
            component={Third}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="Fourth"
            component={Fourth}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="Fifth"
            component={Fifth}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="SingleItem"
            component={SingleItem}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="ReferCompany"
            component={ReferCompany}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerTransparent: true, headerMode: 'none' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
