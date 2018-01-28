import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

import { setAccount, loadTransactions } from "../../../reducers/user/actions";

class AccountListItem extends Component {
  
  render() {
    const { type, number, currency } = this.props.account;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.navigate(this.props.account)} >
        <View style={styles.row}>
          <Text>{type}</Text>
        </View>
        <View style={styles.row}>
          <Text>{number} {currency}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    borderColor: "#88ca5e",
    borderWidth: 1,
    padding: 10,
    justifyContent: "center"
  },
  row: {
    alignSelf: "flex-start"
  }
};



export default AccountListItem;