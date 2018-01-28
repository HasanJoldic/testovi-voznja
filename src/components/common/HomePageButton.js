// Import libraries for making a component
import React from 'react';
import { Text, View, Image, Button, TouchableOpacity } from 'react-native';

// Make a component
const HomePageButton = (props) => {
  const { src } = props;
  const { navigate } = props.navigate;
  return (
    <TouchableOpacity
    onPress={() => navigate(props.nav)}
    style={styles.element}>
      <View style={styles.button}>
        <Image
        style={styles.icon}
        source={src}
      />
      </View>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  element: {
    justifyContent: "center",
    marginTop: 25
  },
  button: {
    borderRadius: 100,
    borderWidth: 2,
    padding: 12,
    borderColor: '#fff',
    width: 88,
    flexDirection: "column"
  },
  icon: {
    width: 60,
    height: 60
  },
  text: {
    alignSelf: "center",
    color: "white",
    marginTop: 4,
    fontSize: 16
  },
};

// Make the component available to other parts of the app
export { HomePageButton };