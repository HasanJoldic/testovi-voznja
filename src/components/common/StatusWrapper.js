import React, { Component } from 'react';
import { View } from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';

const StatusWrapper = (props) => {

    return (
      <View style={{flex: 1}}>
        { props.children }
        <Spinner visible={props.isLoading} textStyle={{color: 'white'}}/>
      </View>
    );

}

export { StatusWrapper };
