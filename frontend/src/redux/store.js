import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";

const store = configureStore({
  reducer: {
    toggle: toggleReducer,
  },
});

store.subscribe(() => {
  const dark = store.getState().toggle.value;
  localStorage.setItem('theme', JSON.stringify(dark));
});

export default store;
