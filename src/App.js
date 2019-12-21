import React from 'react';
import './App.css';

const Header = (props) => {
  console.log(props);
  return (
    <header className="header">
      <h1 className="h1">{props.title}</h1>
      <span className="stats">Players: {props.totalPlayer}</span>
    </header>
  );
}

const Player = (props) => (
  <div className="player">
    <span className="player-name">
      <button className="remove-player" onClick={() => props.removePlayer(props.id)}> x </button>
      {props.name}
    </span>
    <Counter/>
  </div>
);

class Counter extends React.Component {
  state = {
    score : 30
  }
  // constructor(){
  //   super(); // 부모 속성 초기화
  //   this.state = {
  //     score : 30
  //   }
  // }
  incrementScore = () => {
    // this.state.score += 1
    //this.setState({score : this.state.score + 1});
    this.setState(prevState => ({ score : prevState.score + 1 }));
  } // arrow function > .bind(this) 하지 않아도 this 인식
  render() {
    return(
      <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{this.state.score}</span>
        {/*이벤트 핸들러 우측에는 함수 선언문이 와야 한다. onClick = function 호출 결과 X function 자체 O */}
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

class App extends React.Component{
  state = {
    players : [
      {name: 'LDK', id: 1},
      {name: 'PARK', id: 2},
      {name: 'KIM', id: 3},
      {name: 'LEE', id: 4}
    ]
  }
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer : ',id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      return {
        players: players
      }
    })
  }
  render(){
    return(
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayer={10 + 1}></Header>

        {
          this.state.players.map(player => ( // 부모가 function handleRemovePlayer 자체를 내린다.
            <Player name={player.name} key={player.id} id={player.id} removePlayer={this.handleRemovePlayer}></Player>
          ))
        }

      </div>
    );
  }
}

export default App;
