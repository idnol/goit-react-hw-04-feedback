import { SectionStyles } from './Section.styles';

export const Section = ({title, children}) => (
  <SectionStyles>
    <h2>{title}</h2>
    {children}
  </SectionStyles>
)
