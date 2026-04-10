import styled from 'styled-components'
import GoogleSignUpButton from './components/ui/GoogleButton'
import { Button } from './components/ui/Button'
import { ButtonSecond } from './components/ui/ButtonSecond'

export const App = () => {
  return (
    <Container>
      
      <Row>
        <Button>+ ADD NEW TEST</Button>
        <Button variant="success">Save</Button>
        <Button variant="secondary">CANCEL</Button>
        <Button variant="default">GO BACK</Button>
        <Button variant="unknown">NEXT</Button>
        <Button variant="rpaction">PRACTICE TEST</Button>
        <Button variant="logout">SIGN IN</Button>
        <Button variant="outline">LOG OUT</Button>
        <ButtonSecond variant="begin"></ButtonSecond>
        <ButtonSecond variant="filled">REGISTER</ButtonSecond>
        <ButtonSecond variant="unknown">TO COME IN</ButtonSecond>
        
        <GoogleSignUpButton />
        
      </Row>
    
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`

const Row = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`
