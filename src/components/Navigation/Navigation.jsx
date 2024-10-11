import css from "./Navigation.module.css";
import { useNavigate, Link } from "react-router-dom";

const Navigation = ({ transactionType }) => {
  const navigate = useNavigate();
  return (
    <nav className={css.wrapper}>
      {transactionType === "expenses" && (
        <>
          <Link onClick={() => navigate("/")} className={css.active}>
            EXPENSES
          </Link>
          <Link onClick={() => navigate("/expenses")} className={css.item}>
            INCOME
          </Link>
        </>
      )}

      {transactionType === "income" && (
        <>
          <Link onClick={() => navigate("/")} className={css.item}>
            EXPENSES
          </Link>
          <Link
            onClick={() => navigate("/income")}
            className={css.active}
          >
            INCOME
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navigation;