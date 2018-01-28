import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: 'darkblue',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 32,
    marginRight: 32
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 50
  }
};

export { Button };