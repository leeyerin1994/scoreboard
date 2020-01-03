import React from 'react';
import _ from 'lodash';

export const Stats = (props) => {
  const players = props.players.length;
  let totalScore = _.sumBy(props.players, 'score');
  //let totalScore = 0;
  //props.players.forEach(player => totalScore += player.score);

  return (
    <table className="stats">
      <tbody>
      <tr>
        <td>Players:</td>
        <td>{players}</td>
      </tr>
      <tr>
        <td>Total Score:</td>
        <td>{totalScore}</td>
      </tr>
      </tbody>
    </table>
  );
}