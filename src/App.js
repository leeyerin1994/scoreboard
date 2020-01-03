import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Player from './components/Player';
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";

class App extends React.Component{
  // handleRemovePlayer = (id) => {
  //   console.log('handleRemovePlayer : ',id);
  //   this.setState(prevState => {
  //     const players = prevState.players.filter(player => player.id !== id);
  //     return {
  //       players: players
  //     }
  //   })
  // }

  // handleChangeScore = (id, delta) => {
  //   console.log('handleChangeScore: ', id, delta);
  //   this.setState(prevState => {
  //     const players = [ ...prevState.players ] // 새로운 배열의 players
  //     players.forEach(player => {
  //       if(player.id === id){
  //         player.score += delta;
  //       }
  //     })
  //     // state가 배열일 경우 새로운 배열을 리턴 - map / filter / ...
  //     return {
  //       players // players : players 생략
  //     }
  //   })
  // }

  // handleAddPlayer = (name) => {
  //   console.log('handleAddPlayer', name);
  //   this.setState(prevState => {
  //     const players = [ ...prevState.players ];
  //     players.push({name: name, id: ++maxId, score: 0});
  //     return {
  //       players // players : players 생략
  //     }
  //   })
  // }

  render(){
    return(
      <div className="scoreboard">
        <Header title="My scoreboard" players={this.props.players}></Header>

        {
          this.props.players.map(player => (
            <Player name={player.name} key={player.id} id={player.id} score={player.score}
                    // removePlayer={this.handleRemovePlayer}
                    // changeScore={this.handleChangeScore}
            ></Player>
          ))
        }
        {/*<AddPlayerForm addPlayer={this.handleAddPlayer}/>*/}
        <AddPlayerForm/>
      </div>
    );
  }
}

// 이후_ subscribe: store의 state => 나의(현재 컴포넌트), props로 매핑
// 부모 => 자식 통신
const mapStateToProps = (state) => ({
  // 왼쪽이 props, 오른쪽이 store의 state
  players: state.playerReducer.players
})


// 커링 펑션, HoC 컴포넌트
export default connect(mapStateToProps)(App);