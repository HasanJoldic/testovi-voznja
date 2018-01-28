import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    // backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10
  }
};

export { CardSection };