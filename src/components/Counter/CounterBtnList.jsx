import React from 'react';
import { CounterControls } from './Counter.styled';

class CounterBtnList extends React.Component {
  handleIncrement = event => {
    console.log(event.target.textContent);
    //   this.setState(prevState => {
    //     return {
    //       // good: prevState.good + 1
    //     };
    //   });
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <CounterControls>
          <li>
            <button type="button">Good</button>
          </li>
          <li>
            <button type="button">Nuetral</button>
          </li>
          <li>
            <button type="button">Bad</button>
          </li>
        </CounterControls>
      </>
    );
  }
}

export default CounterBtnList;
