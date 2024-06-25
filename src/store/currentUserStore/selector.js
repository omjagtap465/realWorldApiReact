import { createSelector } from "reselect";

const selectCurrentUser = (state) => state.currentUser;

export default createSelector([selectCurrentUser], (currentUser) => ({
  isLoggedIn: currentUser.isLoggedIn,
  value: currentUser.value,
}));
