import React from 'react'
import styled from 'styled-components'

import  {LandingHeader}  from './layout/LandingHeader'

const App = () => {
  return (
    <Container>
      <Row>
        
        <LandingHeader role="admin" />
       
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
