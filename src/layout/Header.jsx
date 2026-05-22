import { Box, styled, Typography } from '@mui/material'
import BilingualImg from '../assets/icons/images/bilingual.png'

export const Header = () => {
  const role = 'USER'

  return (
    <StyledHeaderWrapper>
      <StyledContent>
        <StyledLogo src={BilingualImg} alt="logo" />

        <StyledNav>
          <StyledNavItem bold>TESTS</StyledNavItem>

          <StyledNavItem bold color="#4C4859" variant="span">
            {role === 'admin' ? 'SUBMITTED RESULTS' : 'MY RESULTS'}
          </StyledNavItem>
        </StyledNav>
      </StyledContent>
    </StyledHeaderWrapper>
  )
}

const StyledHeaderWrapper = styled(Box)({
  width: '100%',

  backgroundColor: '#fff',
})

const StyledContent = styled(Box)({
  maxWidth: '1400px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 0px',
})

const StyledLogo = styled('img')({
  width: '174px',
  height: '42px',
})

const StyledNav = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '32px',
})

const StyledNavItem = styled(Typography)(({ bold }) => ({
  fontFamily: 'Inter, sans-serif',
  fontSize: '14px',
  fontWeight: bold ? 700 : 400,

  '&:hover': {
    color: '#0909f6',
    cursor: 'pointer',
  },
}))
