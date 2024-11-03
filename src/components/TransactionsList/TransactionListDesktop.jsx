import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectIsLoading } from "../../redux/transactions/selectors";
import { deleteTransaction } from "../../redux/transactions/operations";
import icons from "../../assets/icons.svg";
import { TransactionTable } from "./TransactionListDesktop.styled";

export const TransactionListDesktop = ({ children }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const color = children[1];
  let minus = "-";

  if (color === "green") {
    minus = false;
  }
  
  const handleDelete = (event) => {
    dispatch(deleteTransaction(event.currentTarget.id));
  };

  let transactions = [];

  if (Array.isArray(children[0])) {
    transactions = children[0]; 
  } else if (typeof children[0] === "object" && children[0] !== null) {
    transactions = Object.values(children[0]); 
  }
  
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
