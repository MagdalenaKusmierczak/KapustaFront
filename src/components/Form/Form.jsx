import { useRef, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { OrangeButton } from "../ModalButtons/OrangeButton";
import { useMatchMedia } from "../../hooks/MediaQuery";
import {
  FormWrap,
  StyledForm,
  ButtonWrap,
  InputProduct,
  StyledAllInputsDiv,
  StyledWhiteButton,
} from "./Form.styled";

import DateSelect from "./DateSelect/DateSelect";
import CategorySelect from "./Category/Category";
import InputCalc from "./Input/Input";

import { addExpense, addIncome } from "../../redux/transactions/operations";

// Form to add incomes or expenses
const Form = () => {
  // State
  const [elementCategory, setElementCategory] = useState("Category");
  const [startDate, setStartDate] = useState(new Date());
  //Media
  const { isMobile } = useMatchMedia();
  // Location
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isIncExp =
    location.pathname === "/income" || location.pathname === "/expenses";
  const isTransactions =
    location.pathname === "/income/transactions" ||
    location.pathname === "/expenses/transactions";
  const isVisible = isHome === true;
  // Refs
  const form = useRef(null);
  // Dispatch
  const dispatch = useDispatch();
  // Check for device

  let categoryArray;
  let functionToDispatch;
  // Check location for submit incomes or expenses
  if (
    location.pathname === "/income" ||
    location.pathname === "/income/transactions"
  ) {
    categoryArray = ["Salary", "Additional income"];
    functionToDispatch = addIncome;
  }
  if (
    location.pathname === "/expenses" ||
    location.pathname === "/" ||
    location.pathname === "/expenses/transactions"
  ) {
    categoryArray = [
      "Products",
      "ЗСУ",
      "Entertainment",
      "Health",
      "Transport",
      "Housing",
      "Technics",
      "Communal and communication",
      "Sport and hobby",
      "Education",
      "Other",
    ];
    functionToDispatch = addExpense;
  }
  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const { descr, sum } = event.target.elements;
    let transValue = sum.value;
    // Checks for empty values
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

    // Prepare data for dispatch
    const dataToDispatch = {
      description: descr.value,
      amount: Number(transValue),
      date: startDate.toISOString().split("T")[0],
      category: elementCategory,
    };
    // dispatch
    dispatch(functionToDispatch(dataToDispatch));
    event.target.reset();
    setElementCategory("Product category");
  };
  // Reset Form
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

      {/* Form */}
      {!isVisible && !isIncExp && (
        <StyledForm onSubmit={handleSubmit} ref={form}>
          {/* Div with inputs */}
          <StyledAllInputsDiv>
            {/* Product input */}
            <InputProduct placeholder="Product description" name="descr" />
            {/* Category input */}
            <CategorySelect
              categoryArray={categoryArray}
              elementCategory={elementCategory}
              setElementCategory={setElementCategory}
            />
            {/* Value input */}
            <InputCalc name="sum" />
          </StyledAllInputsDiv>
          {/* Div with buttons */}
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
          {/* Div with inputs */}
          <StyledAllInputsDiv>
            {/* Product input */}
            <InputProduct placeholder="Product description" name="descr" />
            {/* Category input */}
            <CategorySelect
              categoryArray={categoryArray}
              elementCategory={elementCategory}
              setElementCategory={setElementCategory}
            />
            {/* Value input */}
            <InputCalc name="sum" />
          </StyledAllInputsDiv>
          {/* Div with buttons */}
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
