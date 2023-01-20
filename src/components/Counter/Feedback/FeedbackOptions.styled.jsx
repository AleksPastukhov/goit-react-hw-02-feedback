import styled from '@emotion/styled';
export const FeedbackBtns = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;

  & button {
    min-width: 100px;
    border: none;
    padding: 10px 15px;
    background-color: #00afb5;
    color: #fff;
    font-weight: 500;
    margin-left: 5px;
    margin-right: 5px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
    box-shadow: 0px 0px 300px -12px rgba(135, 249, 255, 1);
    transition: box-shadow 250ms linear;
  }
`;
