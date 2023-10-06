import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "./API.jsx";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
};

export const editProfileThunk = createAsyncThunk(
  "profile/edit",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user.accessToken);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    console.log(config);
    console.log(data);
    return await Api.post(`profile/edit`, data, config)
      .then((res) => {
        console.log(data);
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  }
);

export const viewProfileThunk = createAsyncThunk(
  "profile/view",
  async (data) => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    console.log(user.accessToken);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.accessToken}`,
      },
    };
    console.log(config);
    console.log(data);
    return await Api.get(`profile/edit`, config)
      .then((res) => {
        console.log(data);
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err.response;
      });
  }
);

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editProfileThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editProfileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        if (action.payload.data.success) {
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(editProfileThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      })
      .addCase(viewProfileThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(viewProfileThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
        if (action.payload.data.success) {
          state.isSuccess = true;
        } else {
          state.isSuccess = false;
          state.isError = true;
        }
      })
      .addCase(viewProfileThunk.rejected, (state) => {
        state.isLoading = true;
        state.isError = true;
      });
  },
});

export default profileSlice.reducer;
