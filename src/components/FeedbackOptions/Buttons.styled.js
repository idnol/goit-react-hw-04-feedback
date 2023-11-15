import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const ButtonStyled = styled.button`
  border: none;
  border-radius: 5px;
  background: #17178e;
  color: white;
  padding: 5px 15px;
  transition: 250ms ease-in;
  cursor: pointer;

  &:hover {
    background: blueviolet;
  }
`
