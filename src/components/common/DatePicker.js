import React, { Component } from 'react'
import DatePickerLib from 'react-native-datepicker'
import moment from "moment";

const DatePicker = (props) => {

    return (
      <DatePickerLib
        date={props.date}
        mode="date"
        androidMode="spinner"
        format="DD.MM.YYYY"
        maxDate={new Date()}
        customStyles={{
          dateIcon: {
            position: 'absolute',
            right: 0,
            top: 4,
            marginRight: 0
          },
          dateInput: {
            marginRight: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {props.setDate(moment(date, "DD.MM.YYYY"))}}
      />
    )

};

export default DatePicker;