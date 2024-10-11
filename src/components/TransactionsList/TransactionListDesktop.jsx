// import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

// import { selectIsLoading } from "../../redux/transactions/selectors";
// import { deleteTransaction } from "../../redux/transactions/operations";

import { TransactionTable } from "./TransactionListDesktop.styled";
// import icons from "../../assets/icons.svg";

export const TransactionListDesktop = ({ children }) => {
  //Translation
  // const categoryTranslateEng = (name) => {
  //   switch (name.trim()) {
  //     case "Продукты":
  //       return "Products";
  //     case "Алкоголь":
  //       return "Alcohol";
  //     case "Развлечения":
  //       return "Entertainment";
  //     case "Здоровье":
  //       return "Health";
  //     case "Транспорт":
  //       return "Transport";
  //     case "Всё для дома":
  //       return "Housing";
  //     case "Техника":
  //       return "Technics";
  //     case "Коммуналка и связь":
  //       return "Communal and communication";
  //     case "Спорт и хобби":
  //       return "Sport and hobby";
  //     case "Образование":
  //       return "Education";
  //     case "Прочее":
  //       return "Other";
  //     case "З/П":
  //       return "Salary";
  //     case "Доп. доход":
  //       return "Additional income";
  //     default:
  //       break;
  //   }
  // };
  // Dispatch
  // const dispatch = useDispatch();
  // Selectors
  // const isLoading = useSelector(selectIsLoading);
  // Green if income and red if expenses
  // const color = children[1];
  // let minus = "-";

  // if (color === "green") {
  //   minus = false;
  // }
  // Handle delete transaction
  // const handleDelete = (event) => {
  //   dispatch(deleteTransaction(event.currentTarget.id));
  // };
  // Sorted transactions
  //   const sortedTransactions = children[0].slice().sort((a, b) => {
  //     const first = new Date(a.date).getTime();
  //     const second = new Date(b.date).getTime();
  //     if (first - second === 0) {
  //       return first;
  //     }
  //     return second - first;
  //   });

  return (
    // !isLoading && (
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
        {/* {sortedTransactions.slice(0, 20).map((el) => {
          const { _id, description, amount, date, category } = el;
          return (
            <tr key={_id} style={{ height: 40 }}>
              <td>{date.split("-").reverse().join(".")}</td>
              <td>{description}</td>
              <td>{categoryTranslateEng(category)}</td>
              <td style={{ color }}>
                {minus} {amount}.00 UAH
              </td>
              <td>
                <span
                  id={_id}
                  onClick={handleDelete}
                  style={{ cursor: "pointer" }}
                > */}
        {/* Delete icon */}
        {/* <svg width="18px" height="18px">
                    <use href={`${icons}#delete`}></use>
                  </svg>
                </span>
              </td>
            </tr>
          );
        })} */}
      </tbody>
    </TransactionTable>
    // )
  );
};

TransactionListDesktop.propTypes = {
  children: PropTypes.array.isRequired,
};
