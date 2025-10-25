import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import icons from "../../assets/icons.svg";
import { deleteTransaction } from "../../redux/transactions/operations";
import { selectIsLoading } from "../../redux/transactions/selectors";
import type { TransactionItem } from "../../redux/types";
import {
  type TransactionType,
  sortTransactionsByDate,
  formatDate,
  formatAmount,
  getTransactionColor,
} from "../../utils/transactions.utils";
import {
  MobileList,
  MobileItem,
  ItemName,
  ItemNameCont,
  ItemDate,
  ItemDateCont,
  ItemCategory,
  Sum,
  SumCont,
  DesktopTable,
  DeleteButton,
} from "./TransactionsList.styled";

interface TransactionsListProps {
  transactions: TransactionItem[];
  type: TransactionType;
}

export const TransactionsList = ({ transactions, type }: TransactionsListProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsLoading);

  const sortedTransactions = sortTransactionsByDate(transactions);
  const color = getTransactionColor(type);

  const handleDelete = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const id = (event.currentTarget as HTMLElement).id;
      if (id) dispatch(deleteTransaction(id));
    },
    [dispatch]
  );

  if (isLoading) return null;

  return (
    <>
      {/* Mobile View */}
      <MobileList className="container">
        {sortedTransactions.slice(0, 20).map((item) => {
          const { _id, comment, amount, date, category } = item;

          return (
            <MobileItem key={_id}>
              <ItemNameCont>
                <ItemName>{comment || "No description"}</ItemName>
                <ItemDateCont>
                  <ItemDate>{formatDate(date)}</ItemDate>
                  <ItemCategory>{category}</ItemCategory>
                </ItemDateCont>
              </ItemNameCont>
              <SumCont>
                <Sum style={{ color }} className="sum">
                  {formatAmount(amount, type)}
                </Sum>
                <DeleteButton id={_id} onClick={handleDelete}>
                  <svg width="18px" height="18px">
                    <use href={`${icons}#delete`}></use>
                  </svg>
                </DeleteButton>
              </SumCont>
            </MobileItem>
          );
        })}
      </MobileList>

      {/* Desktop View */}
      <DesktopTable className="container">
        <thead>
          <tr>
            <th>DATE</th>
            <th>DESCRIPTION</th>
            <th>CATEGORY</th>
            <th>SUM</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {sortedTransactions.slice(0, 20).map((el) => {
            const { _id, comment, amount, date, category } = el;
            return (
              <tr key={_id}>
                <td>{formatDate(date)}</td>
                <td>{comment || "No description"}</td>
                <td>{category}</td>
                <td style={{ color }}>
                  {formatAmount(amount, type)}
                </td>
                <td>
                  <DeleteButton id={_id} onClick={handleDelete}>
                    <svg width="18px" height="18px">
                      <use href={`${icons}#delete`}></use>
                    </svg>
                  </DeleteButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </DesktopTable>
    </>
  );
};
