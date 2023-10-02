import { styled } from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-size: 12px;
`;

export const Input = styled.input`
  height: 20px;

  border: none;
  outline: none;

  box-shadow: rgb(84, 76, 122) 2px -2px 0px 2px,
    rgb(57, 95, 58) -2px 2px 0px 2px;
`;
