import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, src }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Image
        style={styles.icon}
        source={src}
      />
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="white"
        underlineColorAndroid="white"
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    paddingRight: 5,
    marginRight: 20,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    color: "white"
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    color: "white"
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 20,
    marginLeft: 20
  }
};

export { Input };