import {LandingFooter} from "./landing/LandingFooter";
import { LandingFooterFaq } from './landing/LandingFooterFaq'
import styled from "styled-components";
import "./index.css"

export const App = () => {
  return (
    <Container>
      <LandingFooterFaq />
      <LandingFooter />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
