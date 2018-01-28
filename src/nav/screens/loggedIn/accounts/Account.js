import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusWrapper } from 'react-native';
import { StackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';
import { connect } from "react-redux";

import { Header, Card, CardSection, Button, Question } from "../../../../components/common";
import AccountBalance from "../../../../components/common/accounts/AccountBalance";
import AccountName from "../../../../components/common/accounts/AccountName";
import TransactionsList from "../../../../components/common/accounts/TransactionsList";

class Account extends React.Component {

  state = {
  questionList: [
      {
        "question": "Motornim vozilom na putu moze da upravlja lice: ",
        "answers": [
          "koje ima dokaz da je vozilo kojim upravlja tehnicki ispravno bez obzira na kategoriju kojoj to vozilo pripada.",
          "koje ima vazecu vozacku dozvolu, stranu vozacku dozvolu ili medjunarodnu vozacku dozvolu odgovarajuce kategorije.",
        ],
        "correctAnswers": [2]
      },
      {
        "question":"Kako su duzni postupiti ucesnici u saobracaju kad naidju na saobracajni znak postavljen na putu?",
        "answers":[
          "prema licnoj procjeni, zavisno od konkretne saobracajne situacije na putu.",
          "u skladu sa znacenjem saobracajnog znaka"
        ],
        "correctAnswers": [2]
      },
      {
        "question":"Sta treba uciniti vozac prije nego pokrene vozilo?",
        "answers":[
          "upoznati sva lica sa osnovnim saobracajnim pravilima i kaznenim odredbama.",
          "vezati sigurnosni pojas.",
          "prilagoditi sjediste i naslon za glavu."
        ],
        "correctAnswers": [2, 3]
      },
      {
        "question":"U saobracajnoj situaciji kao na slici, plavi putnicki automobil:",
        "answers":[
          "ne cini prekrsaj jer je prelaz preko pruge regulisan svjetlosnim saobracajnim znakovima.",
          "cini prekrsaj."
        ],
        "correctAnswers": [2],
        "imageSrc": require("../../../../tests/1/4.jpg")
      }
    ],
    questionNumber: 0,
    loading: false,
    pickedAnswers: [],
    isAnswerChecked: false
  };

  static navigationOptions = {
    drawerLabel: 'Računi',
    drawerIcon: () => (
      <Image
        source={require("../../../../static/img/logo.png")}
        style={[styles.icon]}
      />
    ),
  };

  loadNextQuestion() {
    this.setState({
      questionNumber: this.state.questionNumber + 1
    });
  }

  onButtonPress() {
      this.props.navigation.navigate("Account");
    }

  isAnswerCorrect() {
  console.log(this.state.questionList[this.state.questionNumber].correctAnswers);
  console.log(this.state.pickedAnswers);
    if (this.state.questionList[this.state.questionNumber].correctAnswers.length !== this.state.pickedAnswers.length) {
      return false;
    }
    for (let i = 0; i < this.state.questionList[this.state.questionNumber].correctAnswers.length; i++) {
      if (this.state.pickedAnswers.indexOf(this.state.questionList[this.state.questionNumber].correctAnswers[i]) === -1) return false;
    }
    return true;
  }

  checkAnswer() {
    if (!this.state.isAnswerChecked) {
      let isAnswerCorrect = this.isAnswerCorrect();
      console.log(isAnswerCorrect);
      this.setState({
        isAnswerChecked: true
      });
    } else {
      this.setState({
        isAnswerChecked: false,
        questionNumber: this.state.questionNumber + 1,
        pickedAnswers: []
      });
    }
  }

  renderButton(text) {
      if (this.state.loading) {
        return <Spinner size="small" />;
      }

      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          {text}
        </Button>
      );
    }

    onAnswerPress(answerNumber: number) {
      const canRemoveAnswer = this.state.pickedAnswers.indexOf(answerNumber) !== -1;
          console.log(this.state.questionList[this.state.questionNumber].answers);

      if (canRemoveAnswer) {
        let index = this.state.pickedAnswers.indexOf(answerNumber);
        let pickedAnswersUpdated = [...this.state.pickedAnswers.slice(0, index), ...this.state.pickedAnswers.slice(index+1)];
        this.setState({
          pickedAnswers: pickedAnswersUpdated
        });
      } else {
        this.setState({
          pickedAnswers: [...this.state.pickedAnswers, answerNumber]
        });
      }
    }

  render() {
  let question = this.state.questionList[this.state.questionNumber];
  const pickedAnswers = this.state.pickedAnswers;
    return (
      <View style={styles.body}>
      <Header headerText="Test ">
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                  <Image
                    style={styles.drawerMenu}
                    source={require("../../../../static/img/drawer-menu.png")}
                  />
                </TouchableOpacity>
              </Header>
      <Question
        text={question.question}
        answers={question.answers}
        imageSrc={question.imageSrc}
        correctAnswers={question.correctAnswers}
        pickedAnswers={pickedAnswers}
        onAnswerPress={this.onAnswerPress.bind(this)}
        isAnswerChecked={this.state.isAnswerChecked}
      />
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={{...styles.footerButton, backgroundColor: this.state.isAnswerChecked ? this.isAnswerCorrect() ? "green" : "red" : "darkblue"}} onPress={this.checkAnswer.bind(this)}>
        <Text style={styles.buttonText}>
            {this.state.isAnswerChecked ? this.isAnswerCorrect() ? "Dalje" : "Dalje" : "Provjeri"}
        </Text>
      </TouchableOpacity>
      </View>
        </View>
    );
  }
}

const styles = {
  body: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "space-between"
  },
  icon: {
    width: 10,
    height: 10,
  },
  drawerMenu: {
    width: 40,
    height: 40
  },
  footerButton: {
    alignSelf: 'stretch',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 32,
    marginRight: 32

  },
  buttonContainer: {
    borderTopWidth: 1,
    paddingTop: 5,
    marginTop: 5,
    marginBottom: 10
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

const mapStateToProps = state => {
  return {
    isLoading: state.user.isLoading
  };
};

export default connect(mapStateToProps)(Account);