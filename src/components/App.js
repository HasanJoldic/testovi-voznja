import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Provider, connect } from "react-redux";
import { StackNavigator, DrawerNavigator, addNavigationHelpers } from 'react-navigation';


class AppNavigation extends Component {
  render() {
    const { nav, dispatch } = this.props;
    return(
      <NavigationStack 
          navigation={addNavigationHelpers({ dispatch, state: nav })}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    nav: state.nav
  };
};

class App extends Component {

  renderContent() {
    switch (this.props.auth.isAuthenticated) {
      case true:
        return <LoggedInScreens />;
      case false:
        return <LoggedOut />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={styles.body}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#88ca5e",
    flex: 1
  },
  icon: {
    width: 10,
    height: 10,
  },
  drawerMenu: {
    width: 40,
    height: 40
  }
});



export default connect(mapStateToProps)(AppNavigation);