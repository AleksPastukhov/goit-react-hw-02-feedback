import styled from '@emotion/styled';

export const CounterStyles = styled.div`
  width: 400px;
  padding: 10px;
  border: 1px solid black;
`;

export const CounterControls = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;

  & button {
    min-width: 100px;
    border: none;
    padding: 10px 15px;
    background-color: teal;
    color: #fff;
    font-weight: 500;
    margin-left: 5px;
    margin-right: 5px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
    box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
    transition: box-shadow 250ms linear;

    &: active {
      box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
    }
  }
`;
export const CounterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  & li {
    margin-right: 15px;
    margin-left: 15px;
    font-size: 32px;
    font-family: monospace;
  }
`;

export const CounterValue = styled.span``;
