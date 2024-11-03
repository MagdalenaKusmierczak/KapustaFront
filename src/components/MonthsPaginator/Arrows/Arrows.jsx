import PropTypes from "prop-types";
import icons from "../../../assets/icons.svg";
import {
  PaginatorWrapper,
  PaginatorArrow,
  PaginatorButton,
} from "./Arrows.styled";

const Arrows = ({ onButtonClick, children }) => {
  const handlerClick = (event) => {
    const name = event.currentTarget.name;
    onButtonClick(name);
  };

  return (
    <PaginatorWrapper>
      <PaginatorButton name="decrement" onClick={handlerClick}>
        <PaginatorArrow>
          <use href={`${icons}#left-month-arrow`}></use>
        </PaginatorArrow>
      </PaginatorButton>
      {children}
      <PaginatorButton name="increment" onClick={handlerClick}>
        <PaginatorArrow>
          <use href={`${icons}#right-month-arrow`}></use>
        </PaginatorArrow>
      </PaginatorButton>
    </PaginatorWrapper>
  );
};

Arrows.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default Arrows;
