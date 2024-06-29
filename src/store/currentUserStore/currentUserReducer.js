import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchApi from "../../utils/fetchApiResponse";

// First async thunk for logging in and obtaining user data
export const currentUserState = createAsyncThunk(
  "currentUser/getCurrentUser",
  async (userData) => {
    const payload = {
      method: "post",
      data: {
        user: {
          ...userData.user,
        },
      },
    };
    const response = await fetchApi(userData.apiUrl, payload);
    return response;
  }
);

// Second async thunk for fetching user data using a token
export const getCurrentUser = createAsyncThunk(
  "currentUser/getUserOnLoad",
  async (token) => {
    const payload = {
      method: "get",
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    };
    const response = await fetchApi('/user', payload);
    return response;
  }
);

export const currentUser = createSlice({
  name: "currentUser",
  initialState: {
    isLoading:true,
    value: undefined,
    isLoggedIn: false,
    token: "",
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.value = null;
      state.isLoggedIn = false;
      state.token = "";
      localStorage.removeItem("token"); 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(currentUserState.pending, (state) => {
      })
      .addCase(currentUserState.fulfilled, (state, action) => {
        const data = action.payload.user;
        state.value = data;
        state.isLoggedIn = true;
        state.isLoggedIn = true;
        state.token = data.token;
        localStorage.setItem("token", data.token);
      })
      .addCase(currentUserState.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        const data = action.payload.user;
        state.isLoading = false
        state.value = data;
        state.isLoggedIn = true;
        state.token = data.token;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.value= null;
        state.error = action.error.message;
      });
  },
});
export const { logoutUser } = currentUser.actions;
export default currentUser.reducer;
