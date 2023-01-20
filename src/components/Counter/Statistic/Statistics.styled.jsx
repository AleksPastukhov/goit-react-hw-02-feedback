import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    margin-right: 15px;
    margin-left: 15px;
    font-size: 24px;
    font-family: monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const StatisticsValue = styled.span``;
