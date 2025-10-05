import { useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTransaction } from "../../redux/transactions/operations";
import { selectIsLoading } from "../../redux/transactions/selectors";

type AnyTransaction = {
  _id: string;
  description: string;
  amount: number;
  date: string;
  category: string;
};

interface UseTransactionsListArgs {
  children: any;
}

export function useTransactionsList({ children }: UseTransactionsListArgs) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const color: string | undefined = children?.[1];

  const minus = useMemo(() => (color === "green" ? "" : "-"), [color]);

  const transactions: AnyTransaction[] = useMemo(() => {
    const source = children?.[0];
    if (Array.isArray(source)) return source as AnyTransaction[];
    if (source && typeof source === "object") return Object.values(source) as AnyTransaction[];
    return [] as AnyTransaction[];
  }, [children]);

  const sortedTransactions = useMemo(() => {
    return transactions.slice().sort((a, b) => {
      const first = new Date(a.date).getTime();
      const second = new Date(b.date).getTime();
      if (first - second === 0) return first;
      return second - first;
    });
  }, [transactions]);

  const handleDelete = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const id = (event.currentTarget as HTMLElement).id;
      if (id) dispatch(deleteTransaction(id) as any);
    },
    [dispatch]
  );

  return { isLoading, color, minus, sortedTransactions, handleDelete };
}


