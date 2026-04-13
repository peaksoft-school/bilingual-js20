import styled, { keyframes } from 'styled-components'
import { Typography } from '@mui/material'

import english from '../../assets/icons/english.svg'
import Accessible from '../../assets/icons/accessible.svg'
import speech from '../../assets/icons/speech.svg'
import extensive from '../../assets/icons/extensive.svg'
import tutoring from '../../assets/icons/tutoring.svg'

const rotateAnimation = keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg) scale(1.02); }
`

export const UserExperience = () => {
  const features = [
    { icon: Accessible, text: 'Accessible anytime, anywhere' },
    { icon: extensive, text: 'Extensive business content' },
    { icon: speech, text: 'Leading speech recognition' },
    { icon: tutoring, text: 'Unlimited live tutoring' },
  ]

  return (
    <MainContainer>
      <ContentSection>
        <Title>Unparalleled user experience</Title>

        <Description>
          The most effective way to perfect a language is by immersing yourself in it. Rosetta Stone
          for Enterprise delivers an effective end-to-end experience, founded on a wealth of
          carefully structured content. Each learner has the opportunity to balance independent
          study with optional online tutoring in a way that fits their schedule and language
          learning goals.
        </Description>

        <ListContainer>
          {features.map((item, index) => (
            <ListItem key={index}>
              <IconBox>
                <img src={item.icon} alt={item.text} />
              </IconBox>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </ListContainer>
      </ContentSection>

      <ImageSection>
        <Illustration src={english} alt="English Learning Illustration" />
      </ImageSection>
    </MainContainer>
  )
}

const MainContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fdf5e9;
  min-height: 100vh;
  padding: 60px 10%;
  gap: 50px;
`

const ContentSection = styled.div`
  flex: 1;
  max-width: 600px;
`

const Title = styled(Typography)`
  && {
    font-size: 42px;
    font-weight: 700;
    color: #3752b4;
    line-height: 1.2;
    margin-bottom: 24px;
    font-family: 'Inter', sans-serif;
  }
`

const Description = styled(Typography)`
  && {
    font-size: 16px;
    line-height: 1.6;
    color: #4a4a4a;
    margin-bottom: 40px;
  }
`

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
`

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const IconBox = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
`

const ListItemText = styled(Typography)`
  && {
    font-size: 18px;
    font-weight: 500;
    color: #333;
  }
`

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const Illustration = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  animation: ${rotateAnimation} 5s ease-in-out infinite;
`
