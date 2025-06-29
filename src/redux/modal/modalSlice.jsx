import { createSlice } from "@reduxjs/toolkit";

/**
 * Should files in this folder be of JSX type or just plain old JS?
 * Also, do you really need to keep the modal state directly in Redux? Maybe it's better to use Context API for such a simple interaction
 * (or just using state)
 */

const initialState = {
  isOpen: false,
  isLogoutOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleIsOpen(state) {
      state.isOpen = !state.isOpen;
    },

    toggleIsLogout(state) {
      state.isLogoutOpen = !state.isLogoutOpen;
    },
  },
});

export const { toggleIsOpen, toggleIsLogout } = modalSlice.actions;

const modalReducer = modalSlice.reducer;
export default modalReducer;