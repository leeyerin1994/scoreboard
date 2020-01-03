import {combineReducers} from "redux";
import {playerReducer} from "./player";

export const allReducers = combineReducers({
  playerReducer // playerReducer : playerReducer
});

// state = {
//   playerReducer
// }