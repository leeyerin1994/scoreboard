import React from "react";
import Counter from "./Counter";
import {removePlayer} from "../redux/actions";
import {useDispatch} from "react-redux";

export const Player = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => dispatch(removePlayer(props.id))}> x </button>
        {props.name}
      </span>
      <Counter score={props.score} id={props.id}/>
      {/*<Counter score={props.score} id={props.id} changeScore={props.changeScore}/>*/}
    </div>
  );
}


// const mapActionToProps = (dispatch) => ({
//   // 왼쪽은 props, 오른쪽은 (액션(updateUser)을 디스패치하는) 펑션
//   removePlayer: (id) => dispatch(removePlayer(id))
// })

// 커링 펑션, HoC 컴포넌트
//export default connect(null, mapActionToProps)(Player);
export default Player;