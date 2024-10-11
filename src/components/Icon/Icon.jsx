import sprite from "../../assets/icons.svg";

const Icon = ({ id, iconName, className }) => {
  return (
    <svg id={id} className={className}>
      <use id={id} xlinkHref={`${sprite}#icon-${iconName}`}></use>
    </svg>
  );
};

export default Icon;