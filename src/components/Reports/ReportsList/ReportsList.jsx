import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectReports } from "../../../redux/reports/selectors";
import { filteredDataAction } from "../../../redux/reportsQuery/reportsQuery.slice";
import icons from "../../../assets/icons.svg";
import { List, Item, ItemIncome, ItemSvg, BgcSvg } from "./ReportsList.styled";

export const ReportsList = ({ onChange }) => {
  const [active, setActive] = useState("");
  const [data, setData] = useState({});

  const { reports } = useSelector(selectReports);

  const dispatch = useDispatch();

  const valueArr = [];

  const expensesData = useMemo(
    () => reports?.expenses?.expensesData ?? {},
    [reports]
  );
  
  const incomesData = useMemo(
    () => reports?.incomes?.incomesData ?? {},
    [reports]
  );
  
  useEffect(() => {
    if (onChange === "expenses") {
      setData(expensesData ?? {});
      setActive("");
    } else {
      setData(incomesData ?? {});
      setActive("");
    }
  }, [onChange, expensesData, incomesData]);

  const clickEventHandler = (event) => {
    setActive(event.currentTarget.id);

    const filteredValueArr = valueArr.filter(
      (item) => item[0].replace(/\s+/g, "") === event.currentTarget.id
    );

    dispatch(filteredDataAction(filteredValueArr));
  };

  const entries = Object.entries(data) ?? [];

  return (
    <div>
      <List className={onChange === "income" ? "incomeList" : ""}>
        {entries.map((item) => {
          const iconName = item[0].replace(/\s+/g, "");
          valueArr.push(item);
          if (onChange === "expenses") {
            return (
              <Item
                key={iconName}
                id={iconName}
                onClick={clickEventHandler}
                className={iconName === active ? "active" : ""}
              >
                <p>{item[1].total}.00</p>
                <ItemSvg width="56" height="56">
                  <BgcSvg
                    src={
                      iconName === active
                        ? `${icons}#orange-bg`
                        : `${icons}#grey-bg`
                    }
                    width="59"
                    height="46"
                    viewBox="0 0 54 47"
                    background-position="center"
                    className={iconName === active ? "active" : ""}
                  />
                  <use href={`${icons}#${iconName}`}></use>
                </ItemSvg>
                <p>{item[0]}</p>
              </Item>
            );
          } else if (onChange === "income") {
            return (
              <ItemIncome
                key={iconName}
                id={iconName}
                onClick={clickEventHandler}
                className={iconName === active ? "active" : ""}
              >
                <p>{item[1].total}.00</p>
                <ItemSvg
                  width="56"
                  height="56"
                  className={iconName === active ? "active" : ""}
                >
                  <BgcSvg
                    src={
                      iconName === active
                        ? `${icons}#orange-bg`
                        : `${icons}#grey-bg`
                    }
                    width="59"
                    height="46"
                    viewBox="0 0 54 47"
                    background-position="center"
                    className={iconName === active ? "active" : ""}
                  />
                  <use href={`${icons}#${iconName}`}></use>
                </ItemSvg>
                <p>{item[0]}</p>
              </ItemIncome>
            );
          }
          return <></>;
        })}
      </List>
    </div>
  );
};
