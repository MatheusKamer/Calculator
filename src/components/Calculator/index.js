import React, { useState } from "react";
import {Container, Button, ButtonZero, Box, Display} from './styles'

export default function Main() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState('');

  function handleNumValue(e) {
    var input = e.target.value
    if (num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  function clearDisplay() {
    setNum(0)
    setOldNum(0)
  }

  function percentage() {
    setNum(prevState => prevState / 100)
  }

  function changeValue() {
    setNum(prevState => prevState * -1)
  }

  function handleOperator(e) {
    var operatorInput = e.target.value
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    switch (operator) {
      case '+':
        setNum(Number(oldNum) + Number(num))
        return
      case '-':
        setNum(oldNum - num)
        return
      case '*':
        setNum(prevState => {
          prevState = oldNum * num
          if (Number.isInteger(prevState) === true) {
            return parseFloat(prevState).toFixed(0)
          } else {
            return parseFloat(prevState).toFixed(5)
          }
        })
        return
      case '/':
        setNum(prevState => {
          prevState = oldNum / num
          if (Number.isInteger(prevState) === true) {
            return parseFloat(prevState).toFixed(0)
          } else {
            return parseFloat(prevState).toFixed(5)
          }
        })
        return
    }
  }

  return (
    <>
      <Box>
        <Display>{
          num !== 0 ? num : oldNum
        }</Display>
        <Container>
          <Button onClick={clearDisplay} className="primaryColor">
            {num !== 0 || oldNum !== 0 ? 'C' : 'AC'}
          </Button>
          <Button onClick={changeValue} className="primaryColor">
            +/-
          </Button>
          <Button onClick={percentage} className="primaryColor">
            %
          </Button>
          <Button
            onClick={handleOperator}
            value={'/'}
            className="operator">
            /
          </Button>
          <Button onClick={handleNumValue} value={7} className="secundaryColor">
            7
          </Button>
          <Button onClick={handleNumValue} value={8} className="secundaryColor">
            8
          </Button>
          <Button onClick={handleNumValue} value={9} className="secundaryColor">
            9
          </Button>
          <Button
            onClick={handleOperator}
            value={'*'}
            className="operator">
            X
          </Button>
          <Button onClick={handleNumValue} value={4} className="secundaryColor">
            4
          </Button>
          <Button onClick={handleNumValue} value={5} className="secundaryColor">
            5
          </Button>
          <Button onClick={handleNumValue} value={6} className="secundaryColor">
            6
          </Button>
          <Button
            onClick={handleOperator}
            value={'-'}
            className="operator">
            -
          </Button>
          <Button onClick={handleNumValue} value={1} className="secundaryColor">
            1
          </Button>
          <Button onClick={handleNumValue} value={2} className="secundaryColor">
            2
          </Button>
          <Button onClick={handleNumValue} value={3} className="secundaryColor">
            3
          </Button>
          <Button
            onClick={handleOperator}
            value={'+'}
            className="operator">
            +
          </Button>
          <ButtonZero onClick={handleNumValue} value={0} className="secundaryColor">
            0
          </ButtonZero>
          <Button onClick={handleNumValue} value={0} style={{visibility: "hidden"}}>
            0
          </Button>
          <Button onClick={handleNumValue} value={'.'} className="secundaryColor">
            .
          </Button>
          <Button onClick={calculate} className="equals">
            =
          </Button>
        </Container>
      </Box>
    </>
  )
}
