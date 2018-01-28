import React, { Component } from "react";
import { connect } from "react-redux";
import { StackNavigator, DrawerNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';

import AccountList from "./screens/loggedIn/accounts/AccountList";
import Account from "./screens/loggedIn/accounts/Account";
import AccountDetail from "./screens/loggedIn/accounts/AccountDetail";
import TransactionDetail from "./screens/loggedIn/accounts/TransactionDetail";

import Cards from "./screens/loggedIn/cards/Cards";

import HomeScreen from "../components/HomeScreen";
import LoginForm from '../components/LoginForm';

const Accounts = StackNavigator({
    AccountList: {
      screen: AccountList,
      navigationOptions: {
        header: null
      }
    },
    Account: {
      screen: Account,
      navigationOptions: {
        header: null
      }
    },
    AccountDetail: {
      screen: AccountDetail,
      navigationOptions: {
        header: null
      }
    },
    TransactionDetail: {
      screen: TransactionDetail,
      navigationOptions: {
        header: null
      }
    }
});


const LoggedInStack = DrawerNavigator({
  Accounts: { screen: Accounts },
  Cards: { screen: Cards }
});



const LoggedOutStack = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginForm }
});

export default NavigationStack = StackNavigator({
  Home: {
    screen: LoggedOutStack
  },
  LoggedOut: {
    screen: LoggedOutStack
  }
});