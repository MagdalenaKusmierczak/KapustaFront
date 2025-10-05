import icons from "../../../assets/icons.svg";
import {
  PaginatorWrapper,
  PaginatorArrow,
  PaginatorButton,
} from "./Arrows.styled";

type ArrowsProps = {
  onButtonClick: (name: string) => void;
  children?: React.ReactNode;
};

const Arrows = ({ onButtonClick, children }: ArrowsProps) => {
  const handlerClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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

export default Arrows;
