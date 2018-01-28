import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { connect } from "react-redux";
import moment from "moment";

import { setAccount, loadTransactions } from "../../../../reducers/user/actions";

import { Header, Card, CardSection, Button } from "../../../../components/common";
import AccountBalance from "../../../../components/common/accounts/AccountBalance";
import AccountName from "../../../../components/common/accounts/AccountName";
import TransactionsList from "../../../../components/common/accounts/TransactionsList";
import AccountListItem from "../../../../components/common/accounts/AccountListItem";


class AccountList extends React.Component {
  state = { username: '', password: '', error: '', loading: false };


  static navigationOptions = {
    drawerLabel: 'Test',
    drawerIcon: () => (
      <Image
        source={require('../../../../static/img/logo.png')}
        style={[styles.icon]}
      />
    ),
  };

  onButtonPress() {
      this.props.navigation.navigate("Account");
    }

  renderButton(text) {
      if (this.state.loading) {
        return <Spinner size="small" />;
      }

      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          {text}
        </Button>
      );
    }

  render() {
    return (
      <View style={styles.body}>
      <Header headerText="Test">
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("DrawerOpen")}>
          <Image
            style={styles.drawerMenu}
            source={require("../../../../static/img/drawer-menu.png")}
          />
        </TouchableOpacity>
      </Header>
      <ScrollView style={{ marginTop: 20 }}>
            <CardSection style={styles.body}>
             {this.renderButton("Uradi nasumican test")}
           </CardSection>
           <CardSection style={styles.body}>
             {this.renderButton("Uradi odredjeni test")}
           </CardSection>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
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

const mapStateToProps = state => {
  return {
    accounts: state.user.accounts,
  };
};

export default connect(mapStateToProps, { setAccount, loadTransactions })(AccountList);