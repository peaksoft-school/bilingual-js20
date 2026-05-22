import { Box, styled } from '@mui/material'
import { OUR_TEAM_MEMBERS } from '../../utils/constants'

export const OurTeam = () => {
  const renderCards = () =>
    OUR_TEAM_MEMBERS.map(({ name, role, tl, tr, br, bl, bg }) => (
      <Box key={name}>
        <StyledCard>
          <StyledPhoto $bg={bg} $tl={tl} $tr={tr} $br={br} $bl={bl} />

          <StyledInfo>
            <StyledName>{name}</StyledName>
            <StyledRole>{role}</StyledRole>
          </StyledInfo>
        </StyledCard>
      </Box>
    ))

  return (
    <>
      <StyledTeam>Our team</StyledTeam>

      <StyledCarousel>
        <StyledGroup>{renderCards()}</StyledGroup>
        <StyledGroup aria-hidden>{renderCards()}</StyledGroup>
        <StyledGroup aria-hidden>{renderCards()}</StyledGroup>
      </StyledCarousel>
    </>
  )
}

const StyledCarousel = styled(Box)({
  margin: '100px auto',
  width: '1232px',
  height: '335px',
  display: 'flex',
  overflow: 'hidden',
  position: 'relative',
  gap: '1em',

  '&::-webkit-scrollbar': {
    display: 'none',
  },

  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    width: '120px',
    height: '100%',
    zIndex: 2,
    pointerEvents: 'none',
  },
})

const StyledTeam = styled(Box)({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%) translateY(-20px)',
  fontFamily: 'Gilroy, sans-serif',
  fontWeight: 700,
  color: '#3752b4',
  lineHeight: '130%',
  fontSize: '40px',
  letterSpacing: '0%',
})

const StyledGroup = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1em',
  flexShrink: 0,
  willChange: 'transform',
  animation: 'spin 10s linear infinite',

  '@keyframes spin': {
    from: {
      transform: 'translateX(0)',
    },
    to: {
      transform: 'translateX(-101.5%)',
    },
  },
})

const StyledCard = styled(Box)({
  width: '180px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
})

const StyledPhoto = styled(Box, {
  shouldForwardProp: (prop) => !['$bg', '$tl', '$tr', '$br', '$bl'].includes(prop),
})(({ $bg, $tl, $tr, $br, $bl }) => ({
  width: '180px',
  height: '180px',
  flexShrink: 0,
  backgroundColor: 'coral',
  backgroundImage: $bg ? `url(${$bg})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  borderTopLeftRadius: $tl || '0',
  borderTopRightRadius: $tr || '0',
  borderBottomRightRadius: $br || '0',
  borderBottomLeftRadius: $bl || '0',
}))

const StyledInfo = styled(Box)({
  textAlign: 'center',
})

const StyledName = styled(Box)({
  fontSize: '14px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  color: '#3a10e5',
  margin: '0 0 2px 0',
})

const StyledRole = styled(Box)({
  fontSize: '12px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 400,
  color: '#555',
  margin: 0,
})
