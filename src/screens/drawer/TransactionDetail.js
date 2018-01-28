import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { connect } from "react-redux";

class TransactionDetail extends Component {
  render() {
    const { type, date, number, desc, amount, currency} = this.props.transaction;
    const tableData = [
      ['VRSTA', type],
      ['DATUM', date],
      ['BROJ NALOGA', number],
      ['OPIS/SVRHA', desc],
      ['IZNOS', amount],
      ['VALUTA', currency]
    ];

    return (
      <View style={{ paddingTop: 20, backgroundColor: "#E2F2D9", flex: 1 }}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#E2F2D9'}}>
                    <TableWrapper style={{flexDirection: 'row'}}>
          <Rows data={tableData} style={styles.row} textStyle={styles.text} flexArr={[1, 3]} />
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: { textAlign: 'center' },
  row: { height: 50 , backgroundColor: "white"},
  arrow: { width: 30, height: 30, alignSelf: "flex-end" }
});

const mapStateToProps = state => {
  return {
    transaction: state.user.selectedTransaction
  };
}

export default connect(mapStateToProps)(TransactionDetail);