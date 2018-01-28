// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';

// Make a component
const HomePageSection = (props) => {

  return (
    <View style={styles.section}>
        {props.children}
    </View>
  );
};

const styles = {
  section: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
};

// Make the component available to other parts of the app
export { HomePageSection };