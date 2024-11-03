import { useEffect } from "react";
import PropTypes from "prop-types";
import { monthNames } from "../MonthsSelection";
import Arrows from "../Arrows/Arrows";
import { Month, Year, CalendarBox, Backdrop } from "./Calendar.styled";

export const Calendar = ({
  onClose,
  currentMonth,
  currentYear,
  onChangeDate,
}) => {
  const handleYear = (name) => {
    onChangeDate(name);
  };

  const handleMonth = (event) => {
    const choosedMonth = event.currentTarget.textContent;
    const name = monthNames.indexOf(choosedMonth);
    onChangeDate(name);
  };
 
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleBackdrop = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
 
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdrop}>
      <CalendarBox>
        <Arrows onButtonClick={handleYear}>
          <Year>{currentYear}</Year>
        </Arrows>
        <ul>
          {monthNames.map((el) => {
            return (
              <Month
                className={el === currentMonth ? "active" : ""}
                onClick={handleMonth}
                key={el}
              >
                {el}
              </Month>
            );
          })}
        </ul>
      </CalendarBox>
    </Backdrop>
  );
};

Calendar.propTypes = {
  onClose: PropTypes.func.isRequired,
  currentMonth: PropTypes.string.isRequired,
  currentYear: PropTypes.number.isRequired,
  onChangeDate: PropTypes.func.isRequired,
};
