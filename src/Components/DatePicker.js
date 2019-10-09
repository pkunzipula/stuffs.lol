/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const DatePicker = ({ datetime, setDatetime }) => {
  const setNewDatetime = newDatetime => {
    setDatetime(newDatetime.toDate());
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        label="Date & Time of your Stuffs"
        inputVariant="outlined"
        value={datetime}
        onChange={setNewDatetime}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
