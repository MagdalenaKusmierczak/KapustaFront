import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Picker } from "./DateSelect.styled";
import icons from "../../../assets/icons.svg";

const DateSelect = ({ startDate, setStartDate }) => {
  const handleClick = (event) => {
    event.preventDefault();
  };

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="example-custom-input datePicker"
      onClick={onClick}
      ref={ref}
    >
      <svg className="calendarIcon" width="20px" height="20px">
        <use href={`${icons}#calendar`}></use>
      </svg>
      {value}
    </button>
  ));
  
  return (
    <Picker onClick={handleClick}>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    </Picker>
  );
};

export default DateSelect;

DateSelect.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func.isRequired,
};
