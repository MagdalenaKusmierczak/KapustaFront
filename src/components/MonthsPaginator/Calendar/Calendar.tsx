import { useEffect } from "react";
import { monthNames } from "../../../utils/constants/date";
import Arrows from "../Arrows/Arrows";
import { Month, Year, CalendarBox, Backdrop } from "./Calendar.styled";

type CalendarProps = {
  onClose: () => void;
  currentMonth: string;
  currentYear: number;
  onChangeDate: (value: number | string) => void;
};

export const Calendar = ({
  onClose,
  currentMonth,
  currentYear,
  onChangeDate,
}: CalendarProps) => {
  const handleYear = (name: string) => {
    onChangeDate(name);
  };

  const handleMonth = (event: React.MouseEvent<HTMLLIElement>) => {
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

  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
 
  const handleKeyDown = (event: KeyboardEvent) => {
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
