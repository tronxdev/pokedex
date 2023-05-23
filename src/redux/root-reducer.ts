import { combineReducers } from "redux";
import pokedexReducer from "./slices/pokedex";

const rootReducer = combineReducers({
  pokedex: pokedexReducer,
});

export default rootReducer;
