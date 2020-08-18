import styled, { css } from 'styled-components';

 
interface ContainerProps { 
    isFocused: boolean;
    isErrored: boolean;
    isFilled: boolean;
}
  
export const Container = styled.div<ContainerProps>`
  width: 90vw;
  background: #fff;
  border-radius: 10px;
  border: 2px solid #232129;
  color: #636360;

  display: flex;
  align-items: center;

  ${props => props.isErrored && css`
    border-color: #c53030;
  `}

  ${props => props.isFocused && css`
     border-color: #0071BC;
  `}

  ${props => props.isFilled && css`
    border-color: #232129;
  `}

  & + div {
    margin-top: 8px;
  }

  textarea {
    font-family: Archivo;
    flex: 1;
    padding: 20px;
    background: transparent;
    border: none;
    color: #000;
    outline: none;
    font-size: 20px;

    &::placeholder {
      font-size: 20px;
    }

    & + textarea {
      margin-top: 8px;
    }
  }

`;