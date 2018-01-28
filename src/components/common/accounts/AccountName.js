import React from 'react';
import { View, Text } from 'react-native';

const AccountName = (props) => {

  const { type, number, currency } = props.account;
  return (
    <View style={styles.containerStyle}>
      <Text style={{ alignSelf: "center" }}>{type} {number} {currency}</Text>
    </View>
  );
};

const styles = {
  containerStyle: {
    justifyContent: "center",
    flex: 1,
    padding: 10,
    marginTop: 20,
    borderColor: "white",
    backgroundColor: "white"
  }
};

export default AccountName;