import React from 'react';
// import CounterBtnList from './CounterBtnList';
// import CounterValueList from './CounterValueList';
import {
  CounterStyles,
  CounterList,
  CounterValue,
  CounterControls,
} from './Counter.styled';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    this.setState(prevState => {
      switch (event.target.textContent) {
        case 'Good':
          return {
            good: prevState.good + 1,
          };
        case 'Nuetral':
          return {
            neutral: prevState.neutral + 1,
          };
        case 'Bad':
          return {
            bad: prevState.bad + 1,
          };
        default:
          return;
      }

      //   if (event.target.textContent === 'Good') {
      //     return {
      //       good: prevState.good + 1,
      //     };
      //   } else if (event.target.textContent === 'Nuetral') {
      //     return {
      //       neutral: prevState.neutral + 1,
      //     };
      //   } else {
      //     return {
      //       bad: prevState.bad + 1,
      //     };
      //   }
    });
  };

  render() {
    return (
      <CounterStyles>
        <h1>Please leave feedback</h1>
        <CounterControls onClick={this.handleIncrement}>
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
        <h2>Statistics</h2>
        <CounterList>
          <li>
            Good <CounterValue>{this.state.good}</CounterValue>
          </li>
          <li>
            Nuetral <CounterValue>{this.state.neutral}</CounterValue>
          </li>
          <li>
            Bad <CounterValue>{this.state.bad}</CounterValue>
          </li>
        </CounterList>
      </CounterStyles>
    );
  }

  //   render() {
  //     return (
  //       <CounterStyles>
  //         <CounterBtnList />
  //         <CounterValueList />
  //       </CounterStyles>
  //     );
  //   }
}

export default Counter;
