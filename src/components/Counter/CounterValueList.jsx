import React from 'react';
import { CounterList, CounterValue } from './Counter.styled';
import CounterBtnList from './CounterBtnList';

const BtnList = new CounterBtnList();
console.dir(BtnList.handleIncrement);

class CounterValueList extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default CounterValueList;
