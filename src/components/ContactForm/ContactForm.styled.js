import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

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

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  background-color: transparent;

  font-weight: 800;

  border: none;
  outline: none;

  background-color: white;
  box-shadow: rgb(84, 76, 122) 2px -2px 0px 2px,
    rgb(57, 95, 58) -2px 2px 0px 2px;
  padding: 4px 16px;
  margin-top: 16px;

  &:hover {
    background-color: rgba(128, 128, 128, 0.1);
  }
`;
