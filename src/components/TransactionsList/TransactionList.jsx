import { useDispatch, useSelector } from "react-redux";
import { selectAllTransactions } from "../../redux/transactions/selectors";
import { deleteTransaction } from "../../redux/transactions/operations";
import icons from "../../assets/icons.svg"

import {
  ItemName,
  ItemNameCont,
  ItemDate,
  ItemDateCont,
  Item,
  ItemCategory,
  Sum,
  SumCont,
  List,
} from "./TransactionList.styled";

export const TransactionList = () => {
  //Translation
  const categoryTranslateEng = (name) => {
    switch (name.trim()) {
      case "Продукты":
        return "Products";
      case "Алкоголь":
        return "Alcohol";
      case "Развлечения":
        return "Entertainment";
      case "Здоровье":
        return "Health";
      case "Транспорт":
        return "Transport";
      case "Всё для дома":
        return "Housing";
      case "Техника":
        return "Technics";
      case "Коммуналка и связь":
        return "Communal and communication";
      case "Спорт и хобби":
        return "Sport and hobby";
      case "Образование":
        return "Education";
      case "Прочее":
        return "Other";
      case "З/П":
        return "Salary";
      case "Доп. доход":
        return "Additional income";
      default:
        break;
    }
  };

  // Selectors
  const allTransactions = useSelector(selectAllTransactions);
  // Dispatch
  const dispatch = useDispatch();
  // Sorted transactions
  const sortedTransactions = allTransactions.slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    if (first - second === 0) {
      return first;
    }
    return second - first;
  });
  // Handle delete
  const handleDelete = (event) => {
    dispatch(deleteTransaction(event.currentTarget.id));
  };

  return (
    // List
    <List className="container">
      {sortedTransactions.slice(0, 15).map((item) => {
        const { _id, description, amount, date, category } = item;
        // Check for category, assign color of operation
        let color;
        let minus = false;
        if (category === "З/П" || category === "Доп. доход") {
          color = "green";
        } else {
          color = "red";
          minus = "-";
        }

        return (
          // List item
          <Item key={_id}>
            <ItemNameCont>
              {/* Description */}
              <ItemName>{description}</ItemName>
              <ItemDateCont>
                {/* Date */}
                <ItemDate>{date.split("-").reverse().join(".")}</ItemDate>
                {/* Category */}
                <ItemCategory>{categoryTranslateEng(category)}</ItemCategory>
              </ItemDateCont>
            </ItemNameCont>
            <SumCont>
              {/* Value */}
              <Sum style={{ color }} className="sum">
                {minus} {amount}.00 UAH.
              </Sum>
              <span
                id={_id}
                onClick={handleDelete}
                style={{ cursor: "pointer" }}
              >
                {/* Delete icon */}
                <svg width="18px" height="18px">
                  <use href={`${icons}#delete`}></use>
                </svg>
              </span>
            </SumCont>
          </Item>
        );
      })}
    </List>
  );
};
