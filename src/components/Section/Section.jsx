import { SectionStyles } from './Sections.styled';

const Sections = ({ title, children }) => {
  return (
    <SectionStyles>
      <h1>{title}</h1>
      {children}
    </SectionStyles>
  );
};

export default Sections;
