import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import FeedScreen from '../screens/feed';
import ProfileScreen from '../screens/profile';


const routes = {
  Feed: {
    screen: FeedScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Feed',
    }),
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.user}`,
    }),
  }
}

const config = {
  initialRouteName: 'Feed',
}

const AppWithNavigation = StackNavigator(routes, config);

export default class App extends Component {
  render() {
    return (
      <AppWithNavigation />
    );
  }
}
