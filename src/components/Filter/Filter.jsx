import React from 'react';
import { Input, Label } from './Filter.styled';

const Filter = ({ title, filterChange }) => {
  return (
    <Label>
      {title}
      <Input type="text" name="filter" onInput={filterChange} />
    </Label>
  );
};

export default Filter;
