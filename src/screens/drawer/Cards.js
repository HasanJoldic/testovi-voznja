import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import { Header } from "../../components/common";

class Cards extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Kartice',
    drawerIcon: () => (
      <Image
        source={require('../../static/img/logo.png')}
        style={[styles.icon]}
      />
    ),
  };

  render() {
    return (
      <View>
        <Header headerText="Kartice">
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
            <Image
              style={styles.drawerMenu}
              source={require("../../static/img/drawer-menu.png")}
            />
          </TouchableOpacity>
        </Header>
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

export default Cards;