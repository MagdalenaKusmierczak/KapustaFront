import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getReports } from "../../redux/reports/operations";
import {
  reportsQueryAction,
  filteredDataAction,
} from "../../redux/reportsQuery/reportsQuery.slice";
import { monthNames, getMonth, getYear } from "../../utils/constants/date";
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
  const [year, setYear] = useState<number>(0);
  const [modalCalendar, setModalCalendar] = useState(false);

  const dispatch = useDispatch() as any;

  useEffect(() => {
    setMonthNumber(getMonth());
    setMonth(monthNames[getMonth()]);
    setYear(getYear());
  }, []);

  useEffect(() => {
    setMonth(monthNames[monthNumber]);
    let monthString = "";

    // You can use the padStart method to add leading zeros
    if (monthNumber + 1 < 10) {
      monthString = "0" + (monthNumber + 1);
    } else {
      monthString = (monthNumber + 1).toString();
    }

    const query = `${year}-${monthString}`;

    if (query !== "-01") dispatch((getReports as any)(query));
    dispatch(reportsQueryAction(`${year}-${monthString}`) as any);
  }, [monthNumber, year, dispatch]);

  // Consider using just a date object for that and extracting the month and year from it
  // This way, adding months and years will be easier - you can just use built-in methods
  const handlerClick = (name: string) => {
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

  const handleCalendar = (name: string | number) => {
    switch (name) {
      case "decrement":
        setYear(year - 1);
        break;
      case "increment":
        setYear(year + 1);
        break;
      default:
        if (typeof name === 'number') {
          setMonthNumber(name);
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
