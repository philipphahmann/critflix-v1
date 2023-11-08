import React from 'react'
import * as C from './styles';

const Input = ({ value, onChange, type, placeholder }) => {
  return <C.Input 
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
  />;
};

export default Input
