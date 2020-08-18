import React, { TextareaHTMLAttributes, useState, useCallback, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { 
  name: string;
  rows: number;
}

const Textarea:React.FC<InputProps> = ({name, rows,...rest}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null); 
  const { fieldName, registerField, error, defaultValue } = useField(name);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value',
    })
  }, [fieldName, registerField]);

  const handleFilled = useCallback(() => {
    setIsFocused(false);

    if(textareaRef.current?.value){
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
     <textarea 
      ref={textareaRef}
      name={name}
      defaultValue={defaultValue}
      onFocus={handleFocused}  
      onBlur={handleFilled}
      rows={rows}
      {...rest} 
      />
    </Container>
  );
}

export default Textarea;