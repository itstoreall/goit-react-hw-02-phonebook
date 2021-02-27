import React from 'react';
import { label, input } from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className={label}>
      Find contacts by name
      <input className={input} value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
