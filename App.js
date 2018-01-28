import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { Header, Button, Spinner } from './src/components/common';
import reducers from "./src/reducers";
import AppWithNavigationState from "./src/nav/AppWithNavigationState";

const store = createStore(reducers,
{
  auth: {
    isAuthenticated: false,
    isGuest: true
  },
  app: {
    isLoading: false
  }
}, applyMiddleware(ReduxThunk));



class AppWrapper extends Component {
  render() {
    return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
    );
  }
}


export default AppWrapper;