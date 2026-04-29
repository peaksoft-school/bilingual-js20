import { Box, Typography, keyframes, styled } from '@mui/material'
import english from '../../assets/icons/english.svg'
import Accessible from '../../assets/icons/accessible.svg'
import speech from '../../assets/icons/speech.svg'
import extensive from '../../assets/icons/extensive.svg'
import tutoring from '../../assets/icons/tutoring.svg'

const USER_EXPERIENCE_DATA = [
  { icon: Accessible, text: 'Accessible anytime, anywhere' },
  { icon: extensive, text: 'Extensive business content' },
  { icon: speech, text: 'Leading speech recognition' },
  { icon: tutoring, text: 'Unlimited live tutoring' },
]

export const UserExperience = () => (
  <StyledMainContainer>
    <StyledContentSection>
      <StyledTitle>Unparalleled user experience</StyledTitle>

      <StyledDescription>
        The most effective way to perfect a language is by immersing yourself in it. Rosetta Stone
        for Enterprise delivers an effective end-to-end experience, founded on a wealth of carefully
        structured content. Each learner has the opportunity to balance independent study with
        optional online tutoring in a way that fits their schedule and language learning goals.
      </StyledDescription>

      <StyledListContainer>
        {USER_EXPERIENCE_DATA.map(({ text, icon }, i) => (
          <StyledListItem key={i}>
            <StyledIconBox>
              <img src={icon} alt={text} />
            </StyledIconBox>

            <StyledListItemText>{text}</StyledListItemText>
          </StyledListItem>
        ))}
      </StyledListContainer>
    </StyledContentSection>

    <StyledImageSection>
      <StyledIllustration src={english} alt="English Learning Illustration" />
    </StyledImageSection>
  </StyledMainContainer>
)

const rotateAnimation = keyframes`
  0%, 100% { transform: rotate(0deg); }
  50% { transform: rotate(3deg) scale(1.02); }
`
const StyledMainContainer = styled('section')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#fdf5e9',
  height: '100vh',
  padding: '60px 6%',
  gap: '50px',
})

const StyledContentSection = styled(Box)({
  flex: 1,
  maxWidth: '600px',
})

const StyledTitle = styled(Typography)({
  fontSize: '43px',
  fontWeight: 700,
  color: '#3752b4',
  lineHeight: '100%',
  marginBottom: '44px',
  fontFamily: 'Inter, sans-serif',
})

const StyledDescription = styled(Typography)({
  fontSize: '15px',
  lineHeight: 1.6,
  fontWeight: 400,
  color: '#23212a',
  marginBottom: '40px',
})

const StyledListContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '39px',
})

const StyledListItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
})

const StyledIconBox = styled(Box)({
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '& img': {
    width: '100%',
    height: 'auto',
  },
})

const StyledListItemText = styled(Typography)({
  fontSize: '18px',
  fontWeight: 500,
  color: '#333',
})

const StyledImageSection = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
})

const StyledIllustration = styled('img')({
  width: '100%',
  maxWidth: '448px',
  height: 'auto',
  animation: `${rotateAnimation} 5s ease-in-out infinite`,
})
