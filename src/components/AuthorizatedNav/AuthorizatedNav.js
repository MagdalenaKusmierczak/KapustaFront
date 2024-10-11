import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import {
  AuthNav,
  LoginLabel,
  LoginName,
  LogoutImg,
  VerticalLine,
  ExitButton,
  PageIcon,
} from "./AuthorizatedNav.styled";
import { HeaderModalWindow } from "../Modals/HeaderModalWindow/HeaderModalWindow";
import icons from "../../assets/icons.svg";

// Authorization bar
const AuthorizatedNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUser);
  const dispatch = useDispatch();

  // Logout
  const handleClick = () => {
    dispatch(logOut());
  };
  // Open modal window
  const handleModalOpen = () => {
    setModalOpen(true);
  };
  // Close modal window
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    isLoggedIn && (
      <>
        <AuthNav>
          {/* Round label with first letter of users email */}
          <LoginLabel>{userEmail[0].toUpperCase()}</LoginLabel>
          {/* Users email */}
          <LoginName>{userEmail}</LoginName>
          {/* Logout image. For mobile version only */}
          <LogoutImg>
            <PageIcon>
              <use href={`${icons}#logout`}></use>
            </PageIcon>
          </LogoutImg>
          <VerticalLine></VerticalLine>
          <ExitButton type="button" onClick={handleModalOpen}>
            Exit
          </ExitButton>
        </AuthNav>
        {modalOpen && (
          <HeaderModalWindow
            closeModal={handleModalClose}
            dispatch={handleClick}
          >
            Do you really want to leave?
          </HeaderModalWindow>
        )}
      </>
    )
  );
};
export default AuthorizatedNav;
