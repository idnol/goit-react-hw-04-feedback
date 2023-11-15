import React from 'react';
import { Buttons, ButtonStyled } from './Buttons.styled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => (
  <Buttons className='buttons'>
    {options.map(item => (
      <ButtonStyled
        key={item}
        type = 'button'
        onClick = { () => onLeaveFeedback(item) }
      >
        { item }
      </ButtonStyled>
    ))}
  </Buttons>
)
