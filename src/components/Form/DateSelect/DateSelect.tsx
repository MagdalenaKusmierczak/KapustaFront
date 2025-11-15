import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Picker } from "./DateSelect.styled";
import icons from "../../../assets/icons.svg";

type DateSelectProps = {
  startDate?: Date | null;
  setStartDate: (date: Date | null) => void;
};

const DateSelect = ({ startDate, setStartDate }: DateSelectProps) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const ExampleCustomInput = React.forwardRef<HTMLButtonElement, { value?: string; onClick?: () => void }>(
    ({ value, onClick }, ref) => (
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
    )
  );
  
  return (
    <Picker onClick={handleClick}>
      <DatePicker
        dateFormat="dd.MM.yyyy"
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    </Picker>
  );
};

export default DateSelect;
