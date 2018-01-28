import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import moment from "moment";

export default class TransactionsTable extends Component {
  onPressButton(transaction) {
    this.props.selectTransaction(transaction);
    this.props.navigate("TransactionDetail");
  }

  showButton(transaction) {
        return (<TouchableOpacity onPress={() => this.onPressButton(transaction)}>
          <Image
             style={styles.arrow}
             source={require("../../../static/img/arrow-right.png")}
           />
        </TouchableOpacity>
        );
  }
  render() {

    const tableHead = ['Vrsta', 'Datum', 'Iznos', 'Valuta', ''];
    const tableData = this.props.transactionList && this.props.transactionList.map(transaction => {
      return [
        transaction.type,
        moment(transaction.date).format("DD.MM.YYYY"),
        transaction.amount,
        transaction.currency,
        this.showButton(transaction)
      ];
    });

    return (
      <View style={{ paddingTop: 20 }}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#E2F2D9'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} flexArr={[3, 4, 4, 2, 2]} />
                    <TableWrapper style={{flexDirection: 'row'}}>
          <Rows data={tableData} style={styles.row} textStyle={styles.text} flexArr={[3, 4, 4, 2, 2]} />
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  head: { height: 40, backgroundColor: 'white' },
  text: { textAlign: 'center' },
  row: { height: 50 },
  arrow: { width: 30, height: 30, alignSelf: "flex-end" }
});