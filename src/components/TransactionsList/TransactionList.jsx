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
  const allTransactions = useSelector(selectAllTransactions);

  const dispatch = useDispatch();
 
  const sortedTransactions = allTransactions.slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();

    if (first - second === 0) {
      return first;
    }
    return second - first;
  });
  
  const handleDelete = (event) => {
    dispatch(deleteTransaction(event.currentTarget.id));
  };

  return (
    <List className="container">
      {sortedTransactions.slice(0, 15).map((item) => {
        const { _id, description, amount, date, category } = item;

        let color;
        let minus = false;

        if (category === "Salary" || category === "Additional income") {
          color = "green";
        } else {
          color = "red";
          minus = "-";
        }

        return (
          <Item key={_id}>
            <ItemNameCont>
              <ItemName>{description}</ItemName>
              <ItemDateCont>
                <ItemDate>{date.split("-").reverse().join(".")}</ItemDate>
                <ItemCategory>{(category)}</ItemCategory>
              </ItemDateCont>
            </ItemNameCont>
            <SumCont>
              <Sum style={{ color }} className="sum">
                {minus} {amount}.00 UAH
              </Sum>
              <span
                id={_id}
                onClick={handleDelete}
                style={{ cursor: "pointer" }}
              >
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
