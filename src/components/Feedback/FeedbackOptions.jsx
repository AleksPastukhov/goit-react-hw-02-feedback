import { FeedbackBtns } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <FeedbackBtns onClick={onLeaveFeedback}>
        {options.map(option => {
          return (
            <li key={option}>
              <button type="button">{option}</button>
            </li>
          );
        })}
      </FeedbackBtns>
    </>
  );
};

export default FeedbackOptions;
