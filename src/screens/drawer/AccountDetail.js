import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import { connect } from "react-redux";

class AccountDetail extends Component {
  render() {
  const account = this.props.account;
    const tableData = [
      ['NAZIV PROIZVODA', account.name],
      ['BR.RAČUNA', account.number],
      ['VALUTA', account.currency],
      ['DATUM OTVARANJA', account.createdAt.toString()],
      ['IZNOS PREKORAČENJA', account.limit || 0],
      ['KNJIGOVODSTVENO STANJE', account.state],
      ['RASPOLOŽIVO STANJE', account.state]
    ];

    return (
      <View style={{ paddingTop: 20, backgroundColor: "#E2F2D9", flex: 1 }}>
        <Table borderStyle={{borderWidth: 0, borderColor: '#E2F2D9'}}>
                    <TableWrapper style={{flexDirection: 'row'}}>
          <Rows data={tableData} style={styles.row} textStyle={styles.text} flexArr={[3, 4]} />
          </TableWrapper>
        </Table>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: { textAlign: 'center' },
  row: { height: 50, backgroundColor: "white" },
  arrow: { width: 30, height: 30, alignSelf: "flex-end" }
});

const mapStateToProps = state => {
  return {
    account: state.user.account
  };
};

export default connect(mapStateToProps)(AccountDetail);