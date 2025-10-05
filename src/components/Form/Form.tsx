import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatchMedia } from "../../utils/hooks/useMatchMedia";
import { useRouteDetection } from "../../utils/hooks/useRouteDetection";
import { Button } from "../ModalButtons/Button";
import DateSelect from "./DateSelect/DateSelect";
import CategorySelect from "./Category/Category";
import InputCalc from "./Input/Input";
import { addExpense, addIncome } from "../../redux/transactions/operations";
import {
  getIncomeCategoriesArr,
  getExpenseCategoriesArr,
} from "../../redux/categories/operations";
import {
  selectExpensesCategories,
  selectIncomeCategories,
} from "../../redux/categories/selectors";
import { validateTransactionForm, showValidationErrors } from "../../utils/validation/formValidation";
import type { TransactionFormData, CategoryData } from "../../types/form";
import {
  FormWrap,
  StyledForm,
  ButtonWrap,
  InputProduct,
  StyledAllInputsDiv,
} from "./Form.styled";

const Form = () => {
  const [elementCategory, setElementCategory] = useState("Category");
  const [startDate, setStartDate] = useState(new Date());

  const { isMobile } = useMatchMedia();
  const { isIncExp, isTransactions, isIncome, isExpenses } = useRouteDetection();

  const form = useRef<HTMLFormElement>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomeCategoriesArr() as any);
    dispatch(getExpenseCategoriesArr() as any);
  }, [dispatch]);

  const expensesArr = useSelector(selectExpensesCategories);
  const incomesArr = useSelector(selectIncomeCategories);
  
  let categoryData: CategoryData;
  
  if (isIncome || isTransactions) {
    categoryData = {
      categoryArray: incomesArr,
      functionToDispatch: addIncome as any,
    };
  } else if (isExpenses || isTransactions) {
    categoryData = {
      categoryArray: expensesArr,
      functionToDispatch: addExpense as any,
    };
  } else {
    categoryData = {
      categoryArray: [],
      functionToDispatch: addIncome as any,
    };
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const descr = event.currentTarget.elements.namedItem('descr') as HTMLInputElement;
    const sum = event.currentTarget.elements.namedItem('sum') as HTMLInputElement;
    let transValue = Number(sum.value);

    const validationData = {
      description: descr.value,
      amount: transValue,
      category: elementCategory,
    };

    const validation = validateTransactionForm(validationData);
    if (!validation.isValid) {
      showValidationErrors(validation.errors);
      return;
    }

    if (transValue < 0) transValue = transValue * -1;

    const dataToDispatch: TransactionFormData = {
      description: descr.value,
      amount: transValue,
      date: startDate.toISOString().split("T")[0],
      category: elementCategory,
    };

    dispatch(categoryData.functionToDispatch(dataToDispatch));
    event.currentTarget.reset();
    setElementCategory("Category");
  };

  const handleReset = () => {
    form.current?.reset();
  };

  const renderForm = () => (
    <StyledForm onSubmit={handleSubmit} ref={form}>
      <StyledAllInputsDiv>
        <InputProduct
          autoComplete="off"
          placeholder="Product description"
          name="descr"
        />
        <CategorySelect
          categoryArray={categoryData.categoryArray}
          elementCategory={elementCategory}
          setElementCategory={setElementCategory}
        />
        <InputCalc />
      </StyledAllInputsDiv>
      <ButtonWrap>
        <Button variant="primary" type="submit">INPUT</Button>
        <Button variant="secondary" type="button" onClick={handleReset}>
          CLEAR
        </Button>
      </ButtonWrap>
    </StyledForm>
  );

  return (
    <FormWrap>
      {!isTransactions && (
        <div className="tabletDatepicker">
          <DateSelect startDate={startDate} setStartDate={(date: Date | null) => setStartDate(date || new Date())} />
        </div>
      )}
      {!isIncExp && renderForm()}
      {!isMobile && renderForm()}
    </FormWrap>
  );
};

export default Form;
