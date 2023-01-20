import PropTypes from 'prop-types';
import { StatisticsList, StatisticsValue, Title } from './Statistics.styled';
import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total !== 0 ? (
    <>
      <Title>Statistics</Title>
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
      </StatisticsList>
      <Title>
        Positive feedback
        <StatisticsValue>{positivePercentage}</StatisticsValue>
      </Title>
    </>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
