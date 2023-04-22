import styled from "styled-components";

export const Box = styled.div`
  background-color: black;
  border-radius: 16px;
  width: 240px;
  height: 100%;
  margin: auto;
  margin-top: 48px;
  padding: 8px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Display = styled.h1`
  width: 100%;
  height: 16.3%;
  display: flex;
  color: white;
  justify-content: flex-end;
  margin-top: 10%;
  margin-bottom: 10%;
  font-weight: 400;
`

export const Container = styled.div`
  width: 240px;
  height: 300px;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  .primaryColor {
    background-color: #D2D4D4;
    color: black;
  }

  .secundaryColor {
    color: white;
    background-color: #505050;
  }

  .operator {
    background-color: #FF9500;
    transition-duration: 0.5s
  }

  .operator:focus {
    background-color: #FFFFFF;
    color: #FF9500;
    transition-duration: 0.5s
  }

  .equals {
    background-color: #FF9500;
    transition-duration: 0.5s
  }

  .equals:active {
    background-color: #FFFFFF;
    transition-delay: 0.9;
  }
`;

export const Button = styled.button`
  font-size: 24px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  margin: auto;
  color: white;

  :hover {
    cursor: pointer;
  }

  :active {
    background-color: #FFFFFF;
    transition-delay: 0.9;
  }
`

export const ButtonZero = styled.button`
  font-size: 24px;
  width: 180%;
  height: 48px;
  border: none;
  border-radius: 24px;
  margin: auto;
  color: white;
  margin-left: 8px;
  text-align: left;
  padding-left: 16px;

  :hover{
    cursor: pointer;
  }
`
