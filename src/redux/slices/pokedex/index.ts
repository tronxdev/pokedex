import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INamedApiResource } from "../../../types/api";

interface ISearchHistory {
  data: Array<INamedApiResource & { id: number }>;
}

interface ISliceState {
  searchHistory: ISearchHistory;
}

const initialState: ISliceState = {
  searchHistory: {
    data: [],
  },
};

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {
    addHistory: (
      state,
      action: PayloadAction<INamedApiResource & { id: number }>
    ) => {
      state.searchHistory.data = [
        action.payload,
        ...state.searchHistory.data.filter((d) => d.id !== action.payload.id),
      ].slice(0, 5);
    },
  },
  extraReducers: (builder) => {},
});

export const { addHistory } = pokedexSlice.actions;

export default pokedexSlice.reducer;
