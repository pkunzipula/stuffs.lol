/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const DatePicker = ({ selectedDate, handleDateChange }) => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        label="Date & Time of your Stuffs"
        inputVariant="outlined"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
