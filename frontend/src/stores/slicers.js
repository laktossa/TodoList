import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:3001";

// ============================================== User

export const signIn = createAsyncThunk("signIn", async (payload) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/users/signin`, payload);
    localStorage.setItem("access_token", data.access_token);
  } catch (error) {
    console.log(error);
  }
});

export const signUp = createAsyncThunk("signUp", async (payload) => {
  try {
    await axios.post(`${BASE_URL}/users/signup`, payload);
  } catch (error) {
    console.log(error);
  }
});

// ============================================== Categories

export const getList = createAsyncThunk("getList", async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/list`, {
      headers: { access_token: localStorage.getItem("access_token") },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addList = createAsyncThunk("addList", async (payload) => {
  try {
    await axios.post(`${BASE_URL}/list`, payload, {
      headers: { access_token: localStorage.getItem("access_token") },
    });
  } catch (error) {
    console.log();
  }
});

export const deleteList = createAsyncThunk("deleteList", async (payload) => {
  try {
    await axios.delete(`${BASE_URL}/list/${payload}`, {
      headers: { access_token: localStorage.getItem("access_token") },
    });
  } catch (error) {
    console.log(error);
  }
});

export const changeStatus = createAsyncThunk(
  "changeStatus",
  async (payload) => {
    try {
      await axios.patch(`${BASE_URL}/list`, payload, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
    } catch (error) {
      console.log(error);
    }
  }
);

// ============================================== Categories

export const getCategories = createAsyncThunk("getCategories", async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/categories`, {
      headers: { access_token: localStorage.getItem("access_token") },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addCategories = createAsyncThunk(
  "addCategories",
  async (payload) => {
    try {
      await axios.post(`${BASE_URL}/categories`, payload, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteCategories = createAsyncThunk(
  "deleteCategories",
  async (payload) => {
    try {
      await axios.delete(`${BASE_URL}/categories/${payload}`, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
    } catch (error) {
      console.log();
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    login: false,
    list: [],
    catergories: [],
  },
  reducers: {
    logout: (state, data) => {
      state.login = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signIn.fulfilled, (state) => {
      state.login = true;
      state.loading = false;
    });

    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, actions) => {
      state.list = actions.payload;
      state.loading = false;
    });

    builder.addCase(addCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addCategories.fulfilled, (state, actions) => {
      state.catergories = actions.payload;
      state.loading = false;
    });
  },
});

export const { actions, reducer } = dataSlice;
export default reducer;
