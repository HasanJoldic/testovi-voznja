import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { connect } from "react-redux";

import { Header, Card, CardSection } from "../../components/common";
import AccountBalance from "../../components/common/accounts/AccountBalance";
import AccountName from "../../components/common/accounts/AccountName";
import TransactionsList from "../../components/common/accounts/TransactionsList";
import AccountsList from "../../components/common/accounts/AccountsList";
import {
  selectTransaction
} from "../../reducers/user/actions";

class Account extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Racuni',
    drawerIcon: () => (
      <Image
        source={require('../../static/img/logo.png')}
        style={[styles.icon]}
      />
    ),
  };

  render() {
  const account = this.props.account;
    return (
      <ScrollView style={styles.body}>
      <Header headerText="Racuni">
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Image
                    style={styles.drawerMenu}
                    source={require("../../static/img/drawer-menu.png")}
                  />
                </TouchableOpacity>
              </Header>
       <View style={styles.body}>
        <Card>
          <CardSection>
            <AccountBalance navigate={this.props.navigation.navigate} account={account}/>
          </CardSection>
          <CardSection>
            <TransactionsList
              navigate={this.props.navigation.navigate}
              start={this.props.start}
              end={this.props.end}
              transactionList={this.props.transactionList}
              account={account}
              selectTransaction={this.props.selectTransaction}
            />
          </CardSection>
        </Card>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#E2F2D9",
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
    account: state.user.account,
    start: state.user.account.transactionLists.start,
    end: state.user.account.transactionList.end,
    transactionList: state.user.account.transactionList.list
  };
};

export default connect(mapStateToProps, { selectTransaction })(Account);