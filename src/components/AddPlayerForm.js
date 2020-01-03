import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

export class AddPlayerForm extends React.Component {
  state = {
    value: ''
  }

  submit = (e) => {
    // form의 기본 이벤트 막기
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({value: ''});
  }

  handleValueChange = (e) => {
    console.log(e);
    this.setState({ value: e.target.value })
  }

  render() {
    return (
      <form className="form" onSubmit={this.submit}>
        <input type="text" className="input" placeholder="enter a player name" required
               value={this.state.value} onChange={this.handleValueChange} />
        <input type="submit" className="input" value="Add"/>
      </form>
    );
  }
}

// 이전_ 자식 => 부모 통신 : 펑션을 props로 전달
// 이후_ action dispatch : (액션을 디스패치하는) 펑션을 props로 매핑
const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 (액션(updateUser)을 디스패치하는) 펑션
  addPlayer: (name) => dispatch(addPlayer(name))
})

// 커링 펑션, HoC 컴포넌트
export default connect(null, mapActionToProps)(AddPlayerForm);