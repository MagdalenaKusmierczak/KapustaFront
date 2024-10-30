import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectIsLoading } from "../../redux/transactions/selectors";
import { deleteTransaction } from "../../redux/transactions/operations";
import { TransactionTable } from "./TransactionListDesktop.styled";
import icons from "../../assets/icons.svg";

export const TransactionListDesktop = ({ children }) => {
  const dispatch = useDispatch();
  // Selectors
  const isLoading = useSelector(selectIsLoading);
  //Green if income and red if expenses
  const color = children[1];
  let minus = "-";

  if (color === "green") {
    minus = false;
  }
  //Handle delete transaction
  const handleDelete = (event) => {
    dispatch(deleteTransaction(event.currentTarget.id));
  };

  // Ensure children[0] is an array
  let transactions = [];

  if (Array.isArray(children[0])) {
    transactions = children[0]; // If it's already an array
  } else if (typeof children[0] === "object" && children[0] !== null) {
    transactions = Object.values(children[0]); // Convert object to array
  }
  //Sorted transactions
  const sortedTransactions = transactions.slice().sort((a, b) => {
    const first = new Date(a.date).getTime();
    const second = new Date(b.date).getTime();
    if (first - second === 0) {
      return first;
    }
    return second - first;
  });

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
                    {/* Delete icon */}
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

TransactionListDesktop.propTypes = {
  children: PropTypes.array.isRequired,
};
