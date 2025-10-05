import { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useMatchMedia } from "../../utils/hooks/useMatchMedia";
import { OrangeButton } from "../ModalButtons/OrangeButton";
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
import {
  FormWrap,
  StyledForm,
  ButtonWrap,
  InputProduct,
  StyledAllInputsDiv,
  StyledWhiteButton,
} from "./Form.styled";

const Form = () => {
  const [elementCategory, setElementCategory] = useState("Category");
  const [startDate, setStartDate] = useState(new Date());

  const { isMobile } = useMatchMedia();

  const location = useLocation();

  const isIncExp =
    location.pathname === "/income" || location.pathname === "/expenses";

  // This is repeated a lot in the code, consider lifting it out to a parent component (or a custom hook)
  const isTransactions =
    location.pathname === "/income/transactions" ||
    location.pathname === "/expenses/transactions";

  const form = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomeCategoriesArr());
    dispatch(getExpenseCategoriesArr());
  }, [dispatch]);

  const expensesArr = useSelector(selectExpensesCategories);
  const incomesArr = useSelector(selectIncomeCategories);
  let categoryArray;
  let functionToDispatch;

  if (
    location.pathname === "/income" ||
    location.pathname === "/income/transactions"
  ) {
    categoryArray = incomesArr;
    functionToDispatch = addIncome;
  }

  if (
    location.pathname === "/expenses" ||
    location.pathname === "/expenses/transactions"
  ) {
    categoryArray = expensesArr;
    functionToDispatch = addExpense;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const { descr, sum } = event.target.elements;
    let transValue = sum.value;

    if (descr.value.trim() === "") {
      alert("Please enter a description");
      return;
    }

    if (elementCategory === "Category") {
      alert("Please enter a category");
      return;
    }

    if (transValue.trim() === "") {
      alert("Please enter an amount");
      return;
    }

    if (transValue < 0) transValue = transValue * -1;

    const dataToDispatch = {
      description: descr.value,
      amount: Number(transValue),
      date: startDate.toISOString().split("T")[0],
      category: elementCategory,
    };

    dispatch(functionToDispatch(dataToDispatch));
    event.target.reset();
    setElementCategory("Product category");
  };

  const handleReset = () => {
    form.current.reset();
  };

  return (
    <FormWrap>
      {!isTransactions && (
        <div className="tabletDatepicker">
          <DateSelect startDate={startDate} setStartDate={setStartDate} />
        </div>
      )}
      {!isIncExp && (
        <StyledForm onSubmit={handleSubmit} ref={form}>
          <StyledAllInputsDiv>
            <InputProduct
              autoComplete="off"
              placeholder="Product description"
              name="descr"
            />
            <CategorySelect
              categoryArray={categoryArray}
              elementCategory={elementCategory}
              setElementCategory={setElementCategory}
            />
            <InputCalc name="sum" />
          </StyledAllInputsDiv>
          <ButtonWrap>
            <OrangeButton type="submit">INPUT</OrangeButton>
            <StyledWhiteButton type="button" onClick={handleReset}>
              CLEAR
            </StyledWhiteButton>
          </ButtonWrap>
        </StyledForm>
      )}
      {!isMobile && (
        <StyledForm onSubmit={handleSubmit} ref={form}>
          <StyledAllInputsDiv>
            <InputProduct
              autoComplete="off"
              placeholder="Product description"
              name="descr"
            />
            <CategorySelect
              categoryArray={categoryArray}
              elementCategory={elementCategory}
              setElementCategory={setElementCategory}
            />
            <InputCalc name="sum" />
          </StyledAllInputsDiv>
          <ButtonWrap>
            <OrangeButton type="submit">INPUT</OrangeButton>
            <StyledWhiteButton type="button" onClick={handleReset}>
              CLEAR
            </StyledWhiteButton>
          </ButtonWrap>
        </StyledForm>
      )}
    </FormWrap>
  );
};

export default Form;
