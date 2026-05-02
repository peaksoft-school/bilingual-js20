import LandingBilingual from '../assets/icons/bilingual-landing.svg'
import YouTube from '../assets/icons/you-tube.svg'
import FeceBook from '../assets/icons/facebook.svg'
import Instagram from '../assets/icons/instagram.svg'

import styled from 'styled-components'

export const LandingFooter = () => {
  return (
    <FooterWrapper>
      <Container>
        <StyledBilingual src={LandingBilingual} alt="" />

        <Icons>
          <StyledYouTube src={YouTube} alt="" />
          <StyledFaceBook src={FeceBook} alt="" />
          <StyledInstargam src={Instagram} alt="" />
        </Icons>
      </Container>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background: #262626;
  padding: 40px 0;
  border-top: 1px solid #2a2a2a;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`



const Icons = styled.div`
  display: flex;
  gap: 15px;
`

const StyledYouTube = styled.img`
  width: 30px;
  height: 30px;
  background: #2a2a2a;
  border-radius: 50%;
`
const StyledFaceBook = styled.img`
  width: 30px;
  height: 30px;
  background: #2a2a2a;
  border-radius: 50%;
`

const StyledInstargam = styled.img`
  width: 30px;
  height: 30px;
  background: #2a2a2a;
  border-radius: 50%;
`
const StyledBilingual = styled.img`
width: 165px;
`