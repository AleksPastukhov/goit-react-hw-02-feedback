import { StatisticsList, StatisticsValue } from './Statistics.styled';
import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total !== 0 ? (
    <>
      <h2>Statistics</h2>
      <StatisticsList>
        <li>
          Good <StatisticsValue>{good}</StatisticsValue>
        </li>
        <li>
          Nuetral <StatisticsValue>{neutral}</StatisticsValue>
        </li>
        <li>
          Bad <StatisticsValue>{bad}</StatisticsValue>
        </li>
        <li>
          Total <StatisticsValue>{total}</StatisticsValue>
        </li>
        <li>
          Positive feedback:{' '}
          <StatisticsValue>{positivePercentage}</StatisticsValue>%
        </li>
      </StatisticsList>
    </>
  ) : (
    <Notification message="There is no feedback" />
  );
};

export default Statistics;
