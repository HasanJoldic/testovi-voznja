import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Answer = (props) => {
  const getAnswerColor = () => {
    if (props.isAnswerChecked) {
      if (props.pickedAnswers.indexOf(props.number) !== -1 && props.correctAnswers.indexOf(props.number) !== -1) return "green";
      if (props.pickedAnswers.indexOf(props.number) !== -1 && props.correctAnswers.indexOf(props.number) === -1) return "red";
      if (props.pickedAnswers.indexOf(props.number) === -1 && props.correctAnswers.indexOf(props.number) !== -1) return "orange";
      return "white";
    }
    if (props.pickedAnswers.indexOf(props.number) !== -1) return "lightgrey";
    return null;
  }
  return (
    <TouchableOpacity
      style={{...styles.containerStyle, backgroundColor: getAnswerColor()}}
      onPress={() => props.onAnswerPress(props.number)}
    >
      <View style={styles.number}>
        <Text style={styles.numberContent}>{props.number}</Text>
      </View>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    marginBottom: 15,
    borderWidth: 1,
    padding: 5,
    borderRadius: 10
    // backgroundColor: "white",
  },
  number: {
    padding: 5,
    flex: 1
  },
  numberContent: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white"
  },
  text: {
    flex: 17,
    textAlignVertical: "center",
    marginLeft: 10,
    fontSize: 16
  }
};

export { Answer };