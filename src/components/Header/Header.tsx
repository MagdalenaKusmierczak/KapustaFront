import { Link } from "react-router-dom";
import AuthorizatedNav from "../AuthorizatedNav/AuthorizatedNav";
import icons from "../../assets/icons.svg";
import { HeaderWrapper, HeaderIcon } from "./Header-styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <HeaderIcon>
          <use href={`${icons}#logo-header`}></use>
        </HeaderIcon>
      </Link>
      <AuthorizatedNav />
    </HeaderWrapper>
  );
};

export default Header;
