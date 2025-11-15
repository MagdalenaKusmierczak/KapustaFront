import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { getReports } from "../../redux/reports/operations";
import {
  reportsQueryAction,
  filteredDataAction,
} from "../../redux/reportsQuery/reportsQuery.slice";
import { monthNames } from "../../utils/constants/date";
import { Calendar } from "./Calendar/Calendar";
import Arrows from "./Arrows/Arrows";
import {
  ComponentWrapper,
  PaginatorTitile,
  MonthsDisplayer,
} from "./MonthsPaginator.styled";

const MonthsPaginator = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [modalCalendar, setModalCalendar] = useState(false);

  const dispatch = useDispatch<AppDispatch>();


  const monthNumber = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const month = monthNames[monthNumber];

  useEffect(() => {

    const monthString = (monthNumber + 1).toString().padStart(2, '0');
    const query = `${year}-${monthString}`;

    dispatch(getReports(query));
    dispatch(reportsQueryAction(query));
  }, [currentDate, dispatch, monthNumber, year]);

  const handlerClick = (name: string) => {
    dispatch(filteredDataAction([]));
    
    const newDate = new Date(currentDate);
    
    switch (name) {
      case "decrement":
    
        newDate.setMonth(newDate.getMonth() - 1);
        setCurrentDate(newDate);
        break;
      case "increment":
        newDate.setMonth(newDate.getMonth() + 1);
        setCurrentDate(newDate);
        break;
      default:
        return;
    }
  };

  const handleModalCalendar = () => {
    setModalCalendar((prev) => !prev);
  };

  const handleCalendar = (name: string | number) => {
    const newDate = new Date(currentDate);
    
    switch (name) {
      case "decrement":
        newDate.setFullYear(newDate.getFullYear() - 1);
        setCurrentDate(newDate);
        break;
      case "increment":
        newDate.setFullYear(newDate.getFullYear() + 1);
        setCurrentDate(newDate);
        break;
      default:
        if (typeof name === 'number') {
          newDate.setMonth(name);
          setCurrentDate(newDate);
        }
        return;
    }
  };

  return (
    <ComponentWrapper>
      <PaginatorTitile>Current period:</PaginatorTitile>
      <Arrows onButtonClick={handlerClick}>
        {" "}
        <MonthsDisplayer onClick={handleModalCalendar}>
          {month} {year}
        </MonthsDisplayer>{" "}
      </Arrows>
      {modalCalendar && (
        <Calendar
          currentYear={year}
          currentMonth={month}
          onChangeDate={handleCalendar}
          onClose={handleModalCalendar}
        />
      )}
    </ComponentWrapper>
  );
};

export default MonthsPaginator;
