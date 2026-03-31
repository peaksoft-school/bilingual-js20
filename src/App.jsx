import React from 'react'
import styled from 'styled-components'
import { MyButton as Button } from './components/ui/Button'
import { ButtonSecond } from './components/ui/ButtonSecond'

const App = () => {
  return (
    <Container>
      <Row>
        <Button>+ ADD NEW TEST</Button>
        <Button variant="success">Save</Button>
        <Button variant="secondary">CANCEL</Button>
        <Button variant="default">GO BACK</Button>
        <Button variant="unknown">NEXT</Button>
        <Button variant="rpaction">PRACTICE TEST</Button>
        <Button variant="loqout">SIGN IN</Button>
        <Button variant="outline">LOG OUT</Button>

        <ButtonSecond variant="begin">TO BEGIN</ButtonSecond>
        <ButtonSecond variant="filled">REGISTER</ButtonSecond>
        <ButtonSecond variant="unknown">TO COME IN </ButtonSecond>
      </Row>
    </Container>
  )
}

export default App

const Container = styled.div`
  padding: 40px;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
`
