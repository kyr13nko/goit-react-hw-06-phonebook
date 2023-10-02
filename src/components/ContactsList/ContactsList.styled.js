import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  border-bottom: 4px solid rgb(84, 76, 122);

  &:nth-child(2n) {
    border-bottom: 4px solid rgb(57, 95, 58);
  }
`;

export const ContactValue = styled.p`
  display: flex;
  justify-content: space-between;

  width: 400px;
`;

export const Button = styled.button`
  cursor: pointer;

  font-weight: 800;

  border: none;
  outline: none;

  background-color: white;
  box-shadow: rgb(84, 76, 122) 2px -2px 0px 2px,
    rgb(57, 95, 58) -2px 2px 0px 2px;
  padding: 4px 16px;

  &:hover {
    background-color: rgba(128, 128, 128, 0.1);
  }
`;
