import icons from "../../assets/icons.svg";
import { TransactionTable } from "./TransactionListDesktop.styled";
import { useTransactionsList } from "./useTransactionsList";

type TransactionListDesktopProps = { children: any };

export const TransactionListDesktop = ({ children }: TransactionListDesktopProps) => {
  const { isLoading, color, minus, sortedTransactions, handleDelete } = useTransactionsList({ children });

  return (
    !isLoading && (
      <TransactionTable className="container">
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
            const { _id, description, amount, date, category } = el;
            return (
              <tr key={_id} style={{ height: 40 }}>
                <td>{date.split("-").reverse().join(".")}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td style={{ color }}>
                  {minus} {amount}.00 UAH
                </td>
                <td>
                  <span
                    id={_id}
                    onClick={handleDelete}
                    style={{ cursor: "pointer" }}
                  >
                    <svg width="18px" height="18px">
                      <use href={`${icons}#delete`}></use>
                    </svg>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </TransactionTable>
    )
  );
};

