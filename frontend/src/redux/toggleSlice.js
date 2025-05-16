import { createSlice } from "@reduxjs/toolkit";

const savedTheme = JSON.parse(localStorage.getItem('theme'));
const initialTheme = savedTheme !== null ? savedTheme : false;

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    value: initialTheme,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = toggleSlice.actions;
export default toggleSlice.reducer;
