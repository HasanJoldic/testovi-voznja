import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import { connect } from "react-redux";

const axios = require('axios');

import { Button, Card, CardSection, Input, Spinner, Header, StatusWrapper } from './common';
import { login } from "../reducers/auth/actions";
import { loadUserData } from "../reducers/user/actions";

class LoginForm extends Component {
  static navigationOptions = {
    header: (
      <Header headerText="Login" />
    ),
  };

  state = { username: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { username, password } = this.state;
    this.props.loadUserData(username, password).then(() => {
      this.props.login(username, password);
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
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

  render() {
    return (
    <StatusWrapper isLoading={this.props.isLoading} >
        <View style={styles.body}>

        <CardSection style={styles.body}>
          {this.renderButton("Uloguj se")}
        </CardSection>
        <CardSection style={styles.body}>
          {this.renderButton("Registruj se")}
        </CardSection>
        <CardSection style={styles.body}>
          {this.renderButton("Nastavi kao gost")}
        </CardSection>
      </View>
      </StatusWrapper>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  body: {
    flex: 1,
    backgroundColor: "#88ca5e"
  }
};

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    isLoading: state.auth.isLoading,
    state
  };
};

export default connect(mapStateToProps, { login, loadUserData })(LoginForm);