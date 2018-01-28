import React, { Component } from "react";
import { connect } from "react-redux";
import { StackNavigator, DrawerNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { View } from "react-native";

import { StatusWrapper } from "../components/common";

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

const GuestNavigator = DrawerNavigator({
  Accounts: { screen: Accounts },
  Cards: { screen: Cards }
});

const LoggedInNavigator = DrawerNavigator({
  Accounts: { screen: Accounts },
  Cards: { screen: Cards }
});

const LoggedOutNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginForm }
});

class App extends Component {
  render() {
    const { nav, dispatch, isLoggedIn, isGuest } = this.props;
    let Element = null;
    if (isLoggedIn) { 
      Element = (
        <LoggedInNavigator />
      );
    } else if (isGuest) {
      Element = ( <GuestNavigator /> );
    }
      else {
        Element = ( <LoggedOutNavigator /> );
     }

    return (
      <StatusWrapper isLoading={this.props.isLoading} style={{flex: 1}}>
        { Element }
      </StatusWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isAuthenticated,
    isLoading: state.app.isLoading,
    isGuest: state.auth.isGuest
  };
};

export default connect(mapStateToProps)(App);