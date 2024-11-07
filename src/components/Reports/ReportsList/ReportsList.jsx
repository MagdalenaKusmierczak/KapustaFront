import { useState } from "react";
import { useDispatch } from "react-redux";
import { filteredDataAction } from "../../../redux/reportsQuery/reportsQuery.slice";
import icons from "../../../assets/icons.svg";
import { List, Item, ItemSvg, BgcSvg } from "./ReportsList.styled";

export const ReportsList = ({ data }) => {
  const [active, setActive] = useState("");

  const dispatch = useDispatch();

  const valueArr = [];

  const entries = data && typeof data === "object" ? Object.entries(data) : [];

  const clickEventHandler = (event) => {
    setActive(event.currentTarget.id);

    const filteredValueArr = valueArr
      .filter((item) => item[0] === event.currentTarget.id)
      .map((item) => item[1]);
  
    dispatch(filteredDataAction(filteredValueArr));
  };

  return (
    <div>
      <List>
        {entries.map(([categoryName, entryData]) => {
          const iconId = categoryName.replace(/[\s,]+/g, "");

          valueArr.push([iconId, entryData]);

          const isActive = iconId === active;

          return (
            <Item
              key={iconId}
              id={iconId}
              onClick={clickEventHandler}
              className={isActive ? "active" : ""}
            >
              <p>{entryData.total}.00</p>
              <ItemSvg
                width="60"
                height="60"
                style={{ color: isActive ? "#ff751d" : "currentColor" }}
              >
                <BgcSvg width="60" height="60" viewBox="0 0 60 60">
                  <use
                    href={`${icons}#${isActive ? "orange-bg" : "grey-bg"}`}
                  ></use>
                </BgcSvg>
                <use href={`${icons}#${iconId}`}></use>
              </ItemSvg>
              <p>{categoryName}</p>
            </Item>
          );
        })}
      </List>
    </div>
  );
};
