import React from 'react';
import { View, Text, Image } from 'react-native';

const DateInput = (props) => {
  return (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.container}>
        <View style={{ alignSelf: "center", flexDirection: "row" }}>
        <Text>{new Date().getDate()}.</Text>
        <Text>{new Date().getMonth()}.</Text>
        <Text>{new Date().getFullYear()}</Text>
                </View>


    </View><Image
                             style={styles.calendar}
                             source={require("../../static/img/calendar.png")}
                           /></View>
  );
};

const styles = {
  container: {
    borderColor: "#E2F2D9",
    borderWidth: 1,
    justifyContent: "center",
    flexDirection: "row",
    padding: 5
  },
  calendar: {
    width: 40,
    height: 40
  }
};

export { DateInput };