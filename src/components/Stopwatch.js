import React from 'react';

export class Stopwatch extends React.Component {
  tickRef; // class 내 선언
  state = {
    isRunning: false, // false > 실행 안함, true > 실행
    timer: 0
  }
  tick = () => {
      //console.log('tick');
      if(this.state.isRunning){
        this.setState(prevState => {
          return {
            timer : prevState.timer + 1
          }
        })
      }
  }

  // Dom이 렌더링 된 직후에 호출되는 라이프 사이클 메서드
  // Rest API 호출, 3rd 라이브러리 로딩
  componentDidMount() {
    this.tickRef = setInterval(this.tick, 1000);
  }

  // Dom이 파괴되기 직전에 호출되는 라이프 사이클 메서드
  // 리소스 해제
  componentWillUnmount() {
    clearInterval(this.tickRef)
  }

  handleStopwatch = () => {
    this.setState(prevState => {
      this.setState({isRunning : !prevState.isRunning});
    });
  }


  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button>Reset</button>
      </div>
    );
  }
}