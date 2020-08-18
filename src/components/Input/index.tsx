import React, { InputHTMLAttributes, useState, useCallback, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
  name: string;
}

const Input:React.FC<InputProps> = ({name,...rest}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {fieldName, registerField, error, defaultValue } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  const handleFilled = useCallback(() => {
    setIsFocused(false);

    if(inputRef.current?.value){
      setIsFilled(true);
    }else{
      setIsFilled(false);
    }
  }, [])

  const handleFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  return(
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
     <input 
      ref={inputRef}
      defaultValue={defaultValue}
      name={name} 
      onFocus={handleFocused}
      onBlur={handleFilled}
      {...rest} 
      />
      {error && <span style={{color:'red', fontSize: 20, margin: 5}}>*</span> }
    </Container>
  );
}

export default Input;