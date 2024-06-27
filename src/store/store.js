import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUserStore/currentUserReducer";
const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});
export default store;
