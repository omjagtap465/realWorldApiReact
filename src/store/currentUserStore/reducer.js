import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchApi from "../../utils/fetchApiResponse";
import { useNavigate } from "react-router-dom";
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
    console.log(response);
    return response;
  }
);
const currentUserSlice = createSlice({
  name: "currentUser", //reducer name
  initialState: {
    value: null,
    isLoggedIn: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(currentUserState.pending, (state) => {
      state.value = state.value + 0;
    });
    builder.addCase(currentUserState.fulfilled, (state, action) => {
      const data = action.payload.user;
      state.value = data;
      localStorage.setItem("token", data.token);
      state.isLoggedIn = true;
    });
    builder.addCase(currentUserState.rejected, (state, action) => {
      state.value = action.error.message;
    });
  },
});

// export const { ge } = currentUserSlice;
export default currentUserSlice.reducer;
