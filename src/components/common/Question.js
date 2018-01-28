import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Answer } from "../common";

const Question = (props) => {
  let counter = 0;
  return (
    <View style={styles.containerStyle}>
    <View style={styles.question}>
      <View style={styles.number}>
        <Text style={styles.numberContent}>1</Text>
      </View>
      <Text style={styles.questionText}>{props.text}{props.correctAnswers.length > 1 ? " (Vise tacnih odgovora)" : null}</Text>
      </View>
      <ScrollView>
      { props.imageSrc ?
            <Image
              style={styles.image}
              source={props.imageSrc}
            /> : null}

        { props.answers.map((answer, index) => {
            counter++;
          return <Answer
                    number={counter}
                    text={answer}
                    key={index}
                    pickedAnswers={props.pickedAnswers}
                    correctAnswers={props.correctAnswers}
                    onAnswerPress={props.onAnswerPress}
                    isAnswerChecked={props.isAnswerChecked}
                 />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'column',
    backgroundColor: "white",
    padding: 5,
    flex: 1

      },
  question: {
    marginBottom: 20,
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "black"
  },
  numberContent: {
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "darkblue",
        color: "white"

  },
  number: {
    padding: 5,
    flex: 1,
  },
  questionText: {
    flex: 11,
    textAlignVertical: "center",
    marginLeft: 10,
    fontSize: 24
  },
  image: {
    flex: 1,
    width: 180,
    height: 180,
    marginBottom: 20,
    alignSelf: "center"
  }
};

export { Question };