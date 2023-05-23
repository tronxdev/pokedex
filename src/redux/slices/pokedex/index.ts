import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface IPokemons {
//   data: string[];
//   page: number;
//   loading: boolean;
//   error?: Error;
// }

interface IQuery {
  data: string;
  url: string;
  timestamp: Date;
}

interface IQueries {
  data: IQueries[];
}

interface ISliceState {
  queries: IQueries;
}

const initialState: ISliceState = {
  queries: {
    data: [],
  },
};

export const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = pokedexSlice.actions;

export default pokedexSlice.reducer;
