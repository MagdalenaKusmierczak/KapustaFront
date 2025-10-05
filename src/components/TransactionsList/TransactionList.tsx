import icons from "../../assets/icons.svg";
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
import { useTransactionsList } from "./useTransactionsList";

type TransactionListProps = { children: any };

export const TransactionList = ({ children }: TransactionListProps) => {
  const { isLoading, color, minus, sortedTransactions, handleDelete } = useTransactionsList({ children });

  return (
    !isLoading && (
      <List className="container">
        {sortedTransactions.slice(0, 20).map((item) => {
          const { _id, description, amount, date, category } = item;

          return (
            <Item key={_id}>
              <ItemNameCont>
                <ItemName>{description}</ItemName>
                <ItemDateCont>
                  <ItemDate>{date.split("-").reverse().join(".")}</ItemDate>
                  <ItemCategory>{category}</ItemCategory>
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
    )
  );
};
