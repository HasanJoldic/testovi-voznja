import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { DateInput } from "../index";
import DatePicker from "../DatePicker";
import TransactionsTable from "./TransactionsTable";
class TransactionsList extends Component {
  render() {
    const { start, end } = this.props.account.transactionList;
    return (
      <View style={styles.containerStyle}>
        <View style={{...styles.row, padding: 10}}>
          <Text style={styles.col}>PREGLED TRANSAKCIJA 	ZA PERIOD </Text>
        </View>
        <View style={styles.row}>
          <Text style={{ alignSelf: "center"}}>od   </Text>
            <DatePicker
              setDate={this.props.setStartDate}
              date={this.props.start}
            />
        </View>
        <View style={styles.row}>
          <Text style={{ alignSelf: "center"}}>do   </Text>
            <DatePicker
              setDate={this.props.setEndDate}
              date={this.props.end}
            />
        </View>
        <TransactionsTable
          navigate={this.props.navigate}
          transactionList={this.props.transactionList}
          selectTransaction={this.props.selectTransaction}
        />
      </View>
    );
  }
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    borderColor: "white",
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: "white"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
  col: {
    flexDirection: "column",
  }
};

export default TransactionsList;