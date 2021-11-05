import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { TrelloState, Credentials, CardPosition, StagePosition } from "./types";
import api from "../../../services/api";

const initialState: TrelloState = {
  user: {
    id: 0,
    name: "",
    email: "",
  },
  workspace: {
    id: 0,
    name: "",
    users: [],
    stages: [],
  },
  loading: false,
};

export const signin = createAsyncThunk(
  "auth/signin",
  async (credentials: Credentials) => {
    const response = await api.signin(credentials);

    return response.data;
  }
);

export const changeCard = createAsyncThunk(
  "trello/card",
  async (position: CardPosition) => {
    const response = await api.changeCard(position);

    return response.data;
  }
);

export const changeStage = createAsyncThunk(
  "trello/stage",
  async (position: StagePosition) => {
    const response = await api.changeStage(position);

    return response.data;
  }
);

export const trelloSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.loading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        const { token, user } = action.payload;
        state.user = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        state.workspace = user.workspace;
      })
      .addCase(signin.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default trelloSlice.reducer;
