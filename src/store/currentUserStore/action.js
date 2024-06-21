// src/store/actions/currentUserActions.js
import { createAction } from "@reduxjs/toolkit";

export const getCurrentUser = createAction("currentUser/getCurrentUser");
export const getCurrentUserSuccess = createAction(
  "currentUser/getCurrentUserSuccess"
);
export const getCurrentUserFailure = createAction(
  "currentUser/getCurrentUserFailure"
);
