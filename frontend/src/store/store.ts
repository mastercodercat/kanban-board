import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import trelloReducer from "./modules/trello";

export const store = configureStore({
  reducer: {
    trello: trelloReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
