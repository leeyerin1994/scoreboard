import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../actionTypes";

let maxId = 4;

const playerInitialState = {
  players : [
    {name: 'LDK', id: 1, score: 10},
    {name: 'PARK', id: 2, score: 20},
    {name: 'KIM', id: 3, score: 30},
    {name: 'LEE', id: 4, score: 40}
  ]
}


export const playerReducer = (state = playerInitialState, action) => {
  let players;
  switch(action.type) {
    case ADD_PLAYER: // handleAddPlayer
      players = [ ...state.players ]; // const 블록 안에 중복 선언 error => let players;
      players.push({name: action.name, id: ++maxId, score: 0});
      return {
        ...state,
        players // players : players
      }

    case CHANGE_SCORE: // handleChangeScore
      players = [ ...state.players ];
      players.forEach(player => {
        if(player.id == action.id){
          player.score += action.delta;
        }
      })
      return {
        ...state,
        players // players : players
      }

     case REMOVE_PLAYER: // handleRemovePlayer
      players = state.players.filter(player => player.id !== action.id);
      return {
        ...state,
        players // players : players
      }
  }

  return state;
}