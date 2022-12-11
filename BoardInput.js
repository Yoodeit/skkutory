import React from 'react';

const BoardInput = function({name, placeholder, value, onChange}) {
    return (
      <Input
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
      />
    );   
  }
  
  export default BoardInput;