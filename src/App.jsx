import React from 'react'
import styled from 'styled-components'
import { Button } from './components/ui/Button'
import icon from './assets/bilingual.svg'

const App = () => {
  return (
    <Container>
      <img src={icon} alt="Bilingual Logo" />
      <Row>
        <Button>+ ADD NEW TEST</Button>
        <Button variant="success">Save</Button>
        <Button variant="secondary">CANCEL</Button>
        <Button variant="default">GO BACK</Button>
        <Button variant="unknown">NEXT</Button>
        <Button variant="rpaction">PRACTICE TEST</Button>
         <Button variant="loqout">SING IN</Button>
       
        <Button variant="outline">LOG OUT</Button>
        
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
  gap: 15px;
`
