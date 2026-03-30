import React from 'react'
import styled from 'styled-components'
import { MyButton as Button } from './components/ui/Button'
import { Header } from './components/Header'

const App = () => {
  return (
    <Container>
      <Row>
        <Header role="client" />  
        <Header role="admin" />
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
