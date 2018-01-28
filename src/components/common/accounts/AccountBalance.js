import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";

class AccountBalance extends Component {

  onButtonPress() {
    this.props.navigate("AccountDetail");
  }
render() {
const { type, number, currency, amount } = this.props.account;
  return (
    <View style={styles.container}>
      <View style={styles.balance}>
          <Text>{type}</Text>
          <Text>{number} {currency}</Text>
          <Text>STANJE {amount}</Text>
      </View>
      <TouchableOpacity style={styles.info} onPress={this.onButtonPress.bind(this)}>
        <Image
          style={styles.infoIcon}
          source={require("../../../static/img/info.png")}
        />
      </TouchableOpacity>
    </View>
  );
  }
};

const styles = {
  container: {
    flex: 1,
    flexDirection: "row",
    borderColor: "white",
    borderWidth: 1,
    marginTop: 10,
    //paddingTop: 10,
    //paddingBottom: 10,
    backgroundColor: "white"
  },
  balance: {
    flex: 5,
    padding: 5,
  },
  balanceValues: {
    flexDirection: "column"
  },
  info: {
    flex: 1,
    justifyContent: "center"
  },
  infoIcon: {
    width: 40,
    height: 40,
    alignSelf: 'center'
  }
};

const mapStateToProps = state => {
  return {
    account: state.user.account
  };
};

export default connect(mapStateToProps)(AccountBalance);