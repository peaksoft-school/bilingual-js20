
import styled from 'styled-components'

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
