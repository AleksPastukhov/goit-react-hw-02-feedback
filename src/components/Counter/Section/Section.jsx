import { SectionStyles, Title } from './Sections.styled';
import PropTypes from 'prop-types';

const Sections = ({ title, children }) => {
  return (
    <SectionStyles>
      <Title>{title}</Title>
      {children}
    </SectionStyles>
  );
};

Sections.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Sections;
