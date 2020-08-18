import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
from{
  opacity: 0;
  transform: translateX(-50px);
}
to {
  opacity: 1;
  transform: translateX(0);
}
`;


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  

  animation: ${appearFromLeft} 5s;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 { 
    font-weight: 700;
    font-size: 40px;
    color: #0071BC;
    border-bottom: 1px solid;
    display: flex; 
    align-items: center;
    justify-content: center;
  }
  p { 
    font-weight: 400;
    letter-spacing: 0.5px;
    text-align: center;
    margin: 10px 0;
  }


  button {
    width: 100%;
    border-radius: 20px;
    font-size: 30px;
    padding: 15px;
    border: 0;
    background: #0071BC;
    margin-top: 15px;
    color: #fff;
    transition: opacity 0.4s;
    outline: none;

    &:hover{ 
      opacity: 0.8;
    }
  }
`;