import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getReports } from "../../redux/reports/operations";
import {
  reportsQueryAction,
  filteredDataAction,
} from "../../redux/reportsQuery/reportsQuery.slice";
import { monthNames, getMonth, getYear } from "./MonthsSelection";
import { Calendar } from "./Calendar/Calendar";
import Arrows from "./Arrows/Arrows";
import {
  ComponentWrapper,
  PaginatorTitile,
  MonthsDisplayer,
} from "./MonthsPaginator.styled";

const MonthsPaginator = () => {
  const [monthNumber, setMonthNumber] = useState(0);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [modalCalendar, setModalCalendar] = useState(false);
 
  const dispatch = useDispatch();

  useEffect(() => {
    setMonthNumber(getMonth());
    setMonth(monthNames[getMonth()]);
    setYear(getYear());
  }, []);
  
  useEffect(() => {
    setMonth(monthNames[monthNumber]);
    let monthString = "";

    if (monthNumber + 1 < 10) {
      monthString = "0" + (monthNumber + 1);
    } else {
      monthString = monthNumber + 1;
    }

    const query = `${year}-${monthString}`;

    if (query !== "-01") dispatch(getReports(query));
    dispatch(reportsQueryAction(`${year}-${monthString}`));
  }, [monthNumber, year, dispatch]);

  const handlerClick = (name) => {
    switch (name) {
      case "decrement":
        dispatch(filteredDataAction([]));
        setMonthNumber(monthNumber - 1);
        if (monthNumber === 0) {
          setMonthNumber(11);
          setYear(year - 1);
        }
        break;
      case "increment":
        dispatch(filteredDataAction([]));
        setMonthNumber(monthNumber + 1);
        if (monthNumber === 11) {
          setMonthNumber(0);
          setYear(year + 1);
        }
        break;
      default:
        return;
    }
  };
 
  const handleModalCalendar = () => {
    setModalCalendar((modalCalendar) => !modalCalendar);
  };
 
  const handleCalendar = (name) => {
    switch (name) {
      case "decrement":
        setYear(year - 1);
        break;
      case "increment":
        setYear(year + 1);
        break;
      default:
        setMonthNumber(name);
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
