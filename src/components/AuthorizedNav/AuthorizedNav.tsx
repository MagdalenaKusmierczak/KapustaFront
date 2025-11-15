import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import type { AppDispatch } from "../../redux/store";
import { HeaderModalWindow } from "../Modals/HeaderModalWindow/HeaderModalWindow";
import icons from "../../assets/icons.svg";
import {
  AuthNav,
  LoginLabel,
  LoginName,
  LogoutImg,
  VerticalLine,
  ExitButton,
  PageIcon,
} from "./AuthorizedNav.styled";

const AuthorizedNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(logOut());
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  if (!isLoggedIn || !userEmail) {
    return null;
  }

  return (
    <>
      <AuthNav>
        <LoginLabel>{userEmail[0].toUpperCase()}</LoginLabel>
        <LoginName>{userEmail}</LoginName>
          <LogoutImg type="button" onClick={handleModalOpen}>
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
  );
};

export default AuthorizedNav;
