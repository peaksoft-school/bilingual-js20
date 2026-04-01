import styled from 'styled-components'
import bilingual from '../assets/images/bilingual.png'
import "@fontsource/inter";

function Footer() {
  return (
    <div>
      <StyledDiv>
        <img src={ bilingual } alt=""/>
        <p>© 2022 Peaksoft</p>
      </StyledDiv>
    </div>
  )
}

export default Footer

const StyledDiv = styled.div`
width: 100wv;
display: flex;
justify-content: center;
align-items: center;
height: 95px;
gap: 1rem;
font-family: inter;
color: #98A2B3;
`