import React, { useState } from "react";
import icons from "../../../assets/icons.svg";
import { CategoryDiv, Wrap, SelectBody, Element } from "./Category.styled";

interface CategorySelectProps {
  elementCategory: string;
  setElementCategory: (value: string) => void;
  categoryArray: string[];
}

export default function CategorySelect({
  elementCategory,
  setElementCategory,
  categoryArray,
}: CategorySelectProps) {
  const [selectCategory, setSelectCategory] = useState(false);

  const onSelect = () => {
    setSelectCategory(!selectCategory);
  };

  const getElementCategory = (event: React.MouseEvent<HTMLElement>) => {
    setSelectCategory(!selectCategory);
    setElementCategory((event.target as HTMLElement).innerText);
  };

  return (
    <CategoryDiv>
      <Wrap onClick={onSelect}>
        <span
          style={{
            color:
              elementCategory === "Category"
                ? "var(--ternary-color)"
                : "var(--primary-color)",
          }}
        >
          {elementCategory}
        </span>
        <svg width="11px" height="4px">
          <use href={`${icons}#arrow-down`}></use>
        </svg>
      </Wrap>
      {selectCategory && (
        <SelectBody>
          {categoryArray.map((element) => (
            <Element key={element} onClick={getElementCategory}>
              {element}
            </Element>
          ))}
        </SelectBody>
      )}
    </CategoryDiv>
  );
}
