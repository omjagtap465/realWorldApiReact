import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "./currentUserStore/reducer";
const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});
export default store;
