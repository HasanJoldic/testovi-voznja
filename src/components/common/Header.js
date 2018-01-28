// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component
const Header = (props) => {
  const { textStyle, viewStyle, imageStyle, infoButtonStyle } = styles;

  return (
    <View style={viewStyle}>
    {props.children}
    <View style={{justifyContent: "space-around", flexDirection: "row", flex: 1, alignItems: "center"}}>
    <View style={styles.logo}>
      <Text style={textStyle}>{props.headerText}</Text>
      </View>
          </View>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "white",
    height: 60,
    elevation: 2,
    justifyContent: 'space-between',
    flexDirection: "row",
    alignItems: "center"
  },
  textStyle: {
    fontSize: 20,
    color: "black"
  },
  imageStyle: {
    width: 40,
    height: 40
  },
  infoButtonStyle: {
    width: 20,
    height: 20
  },
  logo: {
    flexDirection: "row",
    alignItems: "center"
  }
};

// Make the component available to other parts of the app
export { Header };